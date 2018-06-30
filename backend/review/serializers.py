from rest_framework import serializers

from review.models import ReviewItem, ReviewText


class ReviewItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewItem
        fields = '__all__'


class ReviewTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewText
        fields = ('text', 'classes')

