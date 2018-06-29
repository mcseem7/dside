from rest_framework import serializers

from portfolio.models import Category


class CategorySerializer(serializers.Serializer):
    tag = serializers.CharField(max_length=50)
    name = serializers.CharField(max_length=100)
