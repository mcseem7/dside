from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import generics, mixins, status
import django.utils.timezone
from review.models import ReviewItem, Grader
from review.serializers import ReviewItemSerializer, ReviewTextSerializer


class ReviewList(APIView):

    def get(self, request, format=None, lang_code=None):
        response = []
        items = ReviewItem.objects.filter(date__lt=django.utils.timezone.now())
        for x in items:
            if x.reviewtext_set.filter(lang_code=lang_code).exists():
                response.append(ReviewItemSerializer(x).data)

        return Response(response)


class ReviewDetails(APIView):

    def get(self, request, format=None, lang_code=None, id=None):

        try:
            item = ReviewItem.objects.get(id=1)
        except ReviewItem.DoesNotExist:
            return Response({})

        response = ReviewItemSerializer(item).data
        response["text_blocks"] = [ReviewTextSerializer(x).data for x in
                                   item.reviewtext_set.filter(lang_code=lang_code)]
        grader = Grader.objects.get(id=response["graded_by"])
        response["graded_by"] = {"name": grader.name, "avatar": grader.avatar.url}
        if not response["text_blocks"]:
            return Response({})

        return Response(response)
