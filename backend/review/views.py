import json

import django.utils.timezone
import requests
from rest_framework import generics, mixins
# Create your views here.
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.views import APIView

from dside.functions import increment_view
from dside.settings import GR_CAPTCHA_SECRET_KEY, GR_CAPTCHA_URL
from review.models import ReviewItem, Grader
from review.serializers import RE, ReviewTextSerializer, ReviewRequestSerializer
from easy_thumbnails.files import get_thumbnailer


class ReviewList(APIView):

    def get(self, request, format=None, lang_code=None):
        response = []
        items = ReviewItem.objects.filter(date__lt=django.utils.timezone.now())
        for x in items:
            if x.reviewtext_set.filter(lang_code=lang_code).exists():
                data = RE(x).data
                data["thumbnail"] = get_thumbnailer(x.background)['200x200'].url
                response.append(data)

        return Response(response)


class ReviewDetails(APIView):

    def get(self, request, format=None, lang_code=None, id=None):

        try:
            item = ReviewItem.objects.get(id=id)
        except ReviewItem.DoesNotExist:
            return Response({})

        response = RE(item).data
        response["thumbnail"] = get_thumbnailer(item.background)['200x200'].url
        response["text_blocks"] = [ReviewTextSerializer(x).data for x in
                                   item.reviewtext_set.filter(lang_code=lang_code)]
        grader = Grader.objects.get(id=response["graded_by"])
        response["graded_by"] = {
            "name": grader.name,
            "avatar": grader.avatar.url,
            "position": grader.position,
            "links": [getattr(grader, "social_link_{}".format(x)) for x in range(1, 4)]
        }
        if not response["text_blocks"]:
            return Response({})

        increment_view(request, item)

        return Response(response)


class ReviewRequestCreate(mixins.CreateModelMixin,
                          generics.GenericAPIView):
    """
    Adds new request for review
    Protected with Google RECAPTCHA
    """

    serializer_class = ReviewRequestSerializer

    def post(self, request, *args, **kwargs):
        g_recaptcha_response = request.data['g-recaptcha-response']
        r = requests.post(GR_CAPTCHA_URL, {
            'secret': GR_CAPTCHA_SECRET_KEY,
            'response': g_recaptcha_response
        })
        # print(r.status_code)
        # print(r.content)
        if not json.loads(r.content.decode())['success']:
            return Response(status=HTTP_400_BAD_REQUEST)

        return self.create(request, *args, **kwargs)
