from django.conf.urls import patterns, include, url

from rest_framework import routers

from views import *


router = routers.DefaultRouter()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'corstutorial.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^', include(router.urls)),
    url(r'^oauth/', include('oauth2_provider.urls', namespace='oauth2_provider')),
)
