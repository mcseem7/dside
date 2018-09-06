from rest_framework import serializers

from home.models import Order, LimitedOffer, LimitedOfferTranslation


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class FilteredListSerializer(serializers.ListSerializer):

    def to_representation(self, data):

        data = data.get(lang_code=self.lang_code, edition__hide=False)
        return super(FilteredListSerializer, self).to_representation(data)


class LimitedOfferTranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LimitedOfferTranslation
        fields = ['title', 'text']


class LimitedOfferSerializer(serializers.ModelSerializer):
    translations = LimitedOfferTranslationSerializer(many=True, read_only=True)

    class Meta:
        model = LimitedOffer
        fields = ['id', 'background', 'date', 'week', 'translations']
