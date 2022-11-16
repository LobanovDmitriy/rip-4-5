from stocks.models import Services, UserService, User
from rest_framework import serializers


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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User
        # Поля, которые мы сериализуем
        fields = ["iduser", "user_name", "user_email", "user_password"]
