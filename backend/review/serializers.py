from rest_framework import serializers

from review.models import ReviewItem


class ReviewItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewItem
        fields = '__all__'

