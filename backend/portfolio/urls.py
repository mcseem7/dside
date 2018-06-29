from django.conf.urls import url
from portfolio.views import CategoryList, PortfolioItemList

urlpatterns = [
    url(r'^getAllCategories/$', CategoryList.as_view()),
    url(r'^getPortfolioItems/(?P<category>[^.]+)/$', PortfolioItemList.as_view()),
    url(r'^getPortfolioItems/$', PortfolioItemList.as_view()),

]