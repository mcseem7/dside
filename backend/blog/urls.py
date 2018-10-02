from django.conf.urls import url

from blog.views import CreateTopicSuggestion, BlogCategoryList, BlogItemDetails, BlogItemList
from home.views import getUpdates

urlpatterns = [

    # url(r'^getReviewList/$', ReviewList.as_view()),

    # url(r'^getReviewDetails/(?P<id>[^.]+)/$', ReviewDetails.as_view()),

    url(r'^addTopicSuggestion/$', CreateTopicSuggestion.as_view()),
    url(r'^getAllCategories/$', BlogCategoryList.as_view()),
    url(r'^getUpdates/$', getUpdates.as_view()),

    url(r'^getBlogItems/(?P<category>[^.]+)/$', BlogItemList.as_view()),
    url(r'^getBlogItems/$', BlogItemList.as_view()),
    url(r'^getBlogItemDetails/(?P<base_name>[^.]+)/$', BlogItemDetails.as_view()),


]