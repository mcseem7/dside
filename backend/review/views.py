from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import generics, mixins
import django.utils.timezone
from review.models import ReviewItem
from review.serializers import ReviewItemSerializer


class ReviewList(APIView):

    def get(self, request, format=None, lang_code=None):
        response = []
        items = ReviewItem.objects.filter(date__lt=django.utils.timezone.now())
        for x in items:
            if x.reviewtext_set.filter(lang_code=lang_code).exists():
                response.append(ReviewItemSerializer(x).data)

        return Response(response)
