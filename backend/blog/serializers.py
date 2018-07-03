from rest_framework import serializers

from blog.models import BlogItem, TopicSuggestion


class BlogItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogItem
        fields = '__all__'


class TopicSuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopicSuggestion
        fields = '__all__'


