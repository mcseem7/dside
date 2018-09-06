from django.conf.urls import url

from blog.views import CreateTopicSuggestion, BlogCategoryList, BlogItemDetails, BlogItemList
from home.views import AddOrder, GetLimitedOffers

urlpatterns = [
    url(r'^addOrder/$', AddOrder.as_view()),
    url(r'^getLimitedOffers/$', GetLimitedOffers.as_view()),
]