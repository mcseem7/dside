from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from home.serializers import OrderSerializer


class AddOrder(generics.CreateAPIView):
    serializer_class = OrderSerializer
