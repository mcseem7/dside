from django.conf.urls import url
from portfolio.views import CategoryList, PortfolioItemList, PortfolioDetails

urlpatterns = [
    url(r'^getAllCategories/$', CategoryList.as_view()),
    url(r'^getPortfolioItems/(?P<category>[^.]+)/$', PortfolioItemList.as_view()),
    url(r'^getPortfolioItems/$', PortfolioItemList.as_view()),
    url(r'^getPortfolioItem/(?P<id>[^.]+)$', PortfolioDetails.as_view()),
]