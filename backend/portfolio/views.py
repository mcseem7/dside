
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from portfolio.models import *

class CategoryList(APIView):

    """
    :get
    List all categories for current language
    """
    def get(self, request, format=True):
        lang_code = request.data.get("lang_code", "en")
        response = []
        for x in Category.objects.all():
            try:
                response.append({
                    "name":x.categorytranslation_set.get(lang_code=lang_code).name,
                    "tag": x.tag
                })
            except CategoryTranslation.DoesNotExist:
                continue
        return Response(response)

