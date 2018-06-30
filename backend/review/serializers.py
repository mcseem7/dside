from recaptcha.fields import ReCaptchaField
from rest_framework import serializers

from review.models import ReviewItem, ReviewText, ReviewRequest


class RE(serializers.ModelSerializer):
    class Meta:
        model = ReviewItem
        fields = '__all__'


class ReviewTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewText
        fields = ('text', 'classes')


class ReviewRequestSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    social_link = serializers.URLField()
    text = serializers.CharField()
    title = serializers.CharField(max_length=100)
    image = serializers.FileField()

    def create(self, validated_data):

        return ReviewRequest.objects.create(**validated_data)
