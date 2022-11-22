from rest_framework import viewsets
from dynamic_rest import viewsets as dynviewsets
from clinic.serializers import ServicesSerializer, UserServiceSerializer, UserSerializer
from clinic.models import Services, UserService, User


class ServicesViewSet(dynviewsets.DynamicModelViewSet):
    queryset = Services.objects.all().order_by('name')
    serializer_class = ServicesSerializer  # Сериализатор для модели


class UserServicesViewSet(dynviewsets.DynamicModelViewSet):
    queryset = UserService.objects.all().order_by('order_date')
    serializer_class = UserServiceSerializer  # Сериализатор для модели


class UserViewSet(dynviewsets.DynamicModelViewSet):
    queryset = User.objects.all().order_by('user_name')
    serializer_class = UserSerializer  # Сериализатор для модели
