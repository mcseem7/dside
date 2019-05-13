from rest_framework.views import APIView
from rest_framework.response import Response

from dside.functions import increment_view
from portfolio.models import *
import django.utils.timezone


class CategoryList(APIView):

    def get(self, request, format="json", lang_code=None):

        response = []
        for x in Category.objects.all():
            try:
                response.append({
                    "name": x.categorytranslation_set.get(lang_code=lang_code).name,
                    "tag": x.tag,
                    "color": x.color
                })
            except CategoryTranslation.DoesNotExist:
                continue
        return Response(response)


class PortfolioItemList(APIView):

    def get(self, request, format=None, lang_code=None, category=None, home=None):

        response = []

        portfolio_items = PortfolioItem.objects.filter(
            category__tag=category) if category else PortfolioItem.objects.filter()

        portfolio_items = portfolio_items.filter(date__lt=django.utils.timezone.now())

        if home:
            portfolio_items = portfolio_items.filter(show_on_home=True)

        for x in portfolio_items:
            try:
                translation = x.portfoliotranslation_set.get(lang_code=lang_code)
                response.append({
                    "id": x.id,
                    "name": translation.name,
                    "category": {
                        "name": x.category.categorytranslation_set.get(lang_code=lang_code).name,
                        "color": x.category.color,
                        "tag": x.category.tag
                    },
                    "views": x.views,
                    "thumbnail": x.thumbnail.url,
                    "CURL": x.base_name,
                    "watching_time": x.watching_time,
                    "description": translation.description,
                    "days_developing": x.days_developing,
                })
            except (CategoryTranslation.DoesNotExist, PortfolioTranslation.DoesNotExist):
                continue
        return Response(response)


class PortfolioHomeItemList(PortfolioItemList):
    def get(self, request, format=None, lang_code=None, category=None, home=None):
        return super(PortfolioHomeItemList, self).get(request, format, lang_code, category, home=True)


class PortfolioDetails(APIView):
    def get(self, request, format=None, lang_code=None, cURL=None):

        response = []

        pi = PortfolioItem.objects.get(base_name=cURL)

        try:
            translation = pi.portfoliotranslation_set.get(lang_code=lang_code)
        except (CategoryTranslation.DoesNotExist, PortfolioTranslation.DoesNotExist):
            return Response({})

        response = {
            "name": translation.name,
            "task": translation.task,
            "thumbnail": pi.thumbnail.url,
            "decision": translation.decision,
            "category": {
                "name": pi.category.categorytranslation_set.get(lang_code=lang_code).name,
                "color": pi.category.color,
                "tag": pi.category.tag
            },
            "views": pi.views,
            "watching_time": pi.watching_time,
            "description": translation.description,
            "font_file": None if not pi.font_file else pi.font_file.url,
            "font_family": pi.font_family,
            "main_image": pi.main_image.url,
            "headers_classes": pi.headers_classes,
            "CURL": pi.base_name,
            "logotype": pi.logotype.url,
            "days_developing": pi.days_developing,
            "hovercolor": pi.hovercolor,
            "attachment":[{"type":x.kind, "content":x.content.url} for x in pi.attachment_set.all()],
            "blocks":[{"type":x.kind, "content":(x.image if x.kind == "image" else x.content).url} for x in pi.attachment2_set.all()],
            "similar_items": [{
                "id": x.id,
                "name": x.portfoliotranslation_set.get(lang_code=lang_code).name,
                "thumbnail": x.thumbnail.url,
                "CURL": x.base_name,
            } for x in pi.similar_items.all() if x.portfoliotranslation_set.filter(lang_code=lang_code)],
        }

        increment_view(request, instance=pi)

        return Response(response)
