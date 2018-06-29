from django.conf.urls import url
from portfolio.views import CategoryList
urlpatterns = [
    url(r'^category/$', CategoryList.as_view()),
]