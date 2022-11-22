from clinic.models import Services, UserService, User
from rest_framework import serializers
from dynamic_rest import serializers as dynserializers


class ServicesSerializer(dynserializers.DynamicModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Services
        # Поля, которые мы сериализуем
        fields = ["idservice", "name", "description", "price"]


class UserServiceSerializer(dynserializers.DynamicModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = UserService
        # Поля, которые мы сериализуем
        fields = ["iduserservice", "id_user", "id_service", "status", "order_date"]


class UserSerializer(dynserializers.DynamicModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User
        # Поля, которые мы сериализуем
        fields = ["iduser", "user_name", "user_email", "user_password"]
