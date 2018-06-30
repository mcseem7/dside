from django.conf.urls import url
from portfolio.views import CategoryList, PortfolioItemList, PortfolioDetails, PortfolioHomeItemList

urlpatterns = [
    url(r'^getAllCategories/$', CategoryList.as_view()),
    url(r'^getPortfolioItems/(?P<category>[^.]+)/$', PortfolioItemList.as_view()),
    url(r'^getPortfolioItems/$', PortfolioItemList.as_view()),
    url(r'^getHomePortfolioItems/(?P<category>[^.]+)/$', PortfolioHomeItemList.as_view()),
    url(r'^getHomePortfolioItems/$', PortfolioHomeItemList.as_view()),
    url(r'^getPortfolioItem/(?P<id>[^.]+)$', PortfolioDetails.as_view()),
]