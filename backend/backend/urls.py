"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from clinic import views as stock_views
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'service', stock_views.ServicesViewSet)
router.register(r'user', stock_views.UserViewSet)
router.register(r'userservices', stock_views.UserServicesViewSet)
router.register(r'userservices-full', stock_views.UserServicesDepthViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('add_user', stock_views.getJson, name='getJson'),
    path('api/user', stock_views.user, name='user'),
    # path('api/login', stock_views.login, name='login'),
    path('admin/', admin.site.urls),
    path('api/token/obtain', TokenObtainPairView.as_view(), name='token_obtain'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
