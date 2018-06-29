from django.conf.urls import url
from portfolio.views import CategoryList, PortfolioItemListCategory

urlpatterns = [
    url(r'^getAllCategories/$', CategoryList.as_view()),
    url(r'^getPortfolioItems/(?P<category>[^.]+)/$', PortfolioItemListCategory.as_view()),
    url(r'^getPortfolioItems/$', PortfolioItemListCategory.as_view()),

]