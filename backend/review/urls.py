from django.conf.urls import url

from review.views import ReviewList

urlpatterns = [
    # url(r'^getAllCategories/$', CategoryList.as_view()),
    # url(r'^getPortfolioItems/(?P<category>[^.]+)/$', PortfolioItemList.as_view()),
    # url(r'^getPortfolioItems/$', PortfolioItemList.as_view()),
    # url(r'^getHomePortfolioItems/(?P<category>[^.]+)/$', PortfolioHomeItemList.as_view()),
    # url(r'^getHomePortfolioItems/$', PortfolioHomeItemList.as_view()),
    # url(r'^getPortfolioItem/(?P<id>[^.]+)$', PortfolioDetails.as_view()),

    url(r'^getReviewList/$', ReviewList.as_view()),


]