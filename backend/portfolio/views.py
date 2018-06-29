from rest_framework.views import APIView
from rest_framework.response import Response
from portfolio.models import *


class CategoryList(APIView):

    def get(self, request, format="json", lang_code=None):

        response = []
        for x in Category.objects.all():
            try:
                response.append({
                    "name": x.categorytranslation_set.get(lang_code=lang_code).name,
                    "tag": x.tag
                })
            except CategoryTranslation.DoesNotExist:
                continue
        return Response(response)


class PortfolioItemList(APIView):

    def get(self, request, format=None, lang_code=None, category=None):

        response = []

        portfolio_items = PortfolioItem.objects.filter(
            category=category) if category else PortfolioItem.objects.filter()

        for x in portfolio_items:
            try:
                translation = x.portfoliotranslation_set.get(lang_code=lang_code)
                response.append({
                    "name": translation.name,
                    "category": x.category.categorytranslation_set.get(lang_code=lang_code).name,
                    "watches": x.watches,
                    "watchingTime": x.watching_time,
                    "description": translation.description,
                })
            except (CategoryTranslation.DoesNotExist, PortfolioTranslation.DoesNotExist):
                continue
        return Response(response)


