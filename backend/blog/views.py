import django.utils.timezone
from rest_framework import generics
# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import BlogCategory, BlogCategoryTranslation, BlogItem, BlogItemTranslation
from blog.serializers import TopicSuggestionSerializer, BlogItemSerializer
from dside.functions import increment_view


class CreateTopicSuggestion(generics.CreateAPIView):
    serializer_class = TopicSuggestionSerializer


class BlogCategoryList(APIView):
    def get(self, request, format="json", lang_code=None):

        response = []
        for x in BlogCategory.objects.all():
            try:
                response.append({
                    "name": x.categorytranslation_set.get(lang_code=lang_code).name,
                    "tag": x.tag,
                    "color": x.color
                })
            except BlogCategoryTranslation.DoesNotExist:
                continue
        return Response(response)


class BlogItemList(APIView):
    def get(self, request, format="json", lang_code=None, category=None):
        response = []
        for x in BlogItem.objects.filter(date__lt=django.utils.timezone.now()):
            data = BlogItemSerializer(x).data
            try:
                translation = x.blogitemtranslation_set.get(lang_code=lang_code)
                print(x.category)
                category_name = x.category.blogcategorytranslation_set.get(lang_code=lang_code).name
            except (BlogItemTranslation.DoesNotExist, BlogCategoryTranslation.DoesNotExist):
                continue

            data["title"] = translation.title
            data["description"] = translation.description
            data["category"] = {"name":category_name, "id":x.category.id, "tag":x.category.tag}

            response.append(data)
        return Response(response)


class BlogItemDetails(APIView):
    def get(self, request, format="json", lang_code=None, id=None):
        try:
            x = BlogItem.objects.get(id=id)
            data = BlogItemSerializer(x).data
            translation = x.blogitemtranslation_set.get(lang_code=lang_code)
            category_name = x.category.blogcategorytranslation_set.get(lang_code=lang_code).name
        except (BlogItemTranslation.DoesNotExist, BlogCategoryTranslation.DoesNotExist, BlogItem.DoesNotExist):
            return Response({})


        data["title"] = translation.title
        data["description"] = translation.description
        data["description"] = translation.body
        data["category"] = {"name": category_name, "id": x.category.id, "tag": x.category.tag}

        increment_view(request, instance=x)

        return Response(data)
