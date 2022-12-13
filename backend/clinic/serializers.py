from rest_framework.fields import CharField

from clinic.models import Services, UserService, User
from rest_framework import serializers
from dynamic_rest import serializers as dynserializers  # dynserializers.DynamicModelSerializer


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Services
        # Поля, которые мы сериализуем
        fields = ["idservice", "name", "description", "price"]


class UserServiceSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = UserService
        # Поля, которые мы сериализуем
        fields = ["iduserservice", "id_user", "id_service", "status", "order_date"]


class UserServiceDepthSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = UserService
        # Поля, которые мы сериализуем
        fields = ["iduserservice", "id_user", "id_service", "status", "order_date"]
        depth = 2


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User
        # Поля, которые мы сериализуем
        fields = "__all__"


class LoginRequestSerializer(serializers.Serializer):
    model = User
    username = CharField(required=True)
    password = CharField(required=True)
