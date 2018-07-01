from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import BlogItem
from home.serializers import OrderSerializer
from portfolio.models import PortfolioItem
from review.models import ReviewItem


class AddOrder(generics.CreateAPIView):
    serializer_class = OrderSerializer


class getUpdates(APIView):

    def get(self, request, format=None, lang_code=None):

        scores = {
            "blog": 0,
            "portfolio": 0,
            "review": 0
        }

        ds = (
            ("blog", BlogItem, 'blogitemtranslation_set'),
            ("portfolio", PortfolioItem, 'portfoliotranslation_set'),
            ("review", ReviewItem, 'reviewtext_set')
        )

        for x in ds:
            for obj in x[1].objects.order_by('-id'):
                if getattr(obj, x[2]).filter().filter(lang_code=lang_code).exists():
                    scores[x[0]] = obj.id
                    break

        return Response({"score": sum(scores.values())})
