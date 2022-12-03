from rest_framework import viewsets
from dynamic_rest import viewsets as dynviewsets  # dynviewsets.DynamicModelViewSet
from clinic.serializers import ServicesSerializer, UserServiceSerializer, UserSerializer
from clinic.models import Services, UserService, User


class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all().order_by('name')
    serializer_class = ServicesSerializer  # Сериализатор для модели

    def get_queryset(self):
        queryset = Services.objects.all().order_by('name')

        if self.request.method == 'GET':
            if self.request.query_params.get('name'):
                name = self.request.query_params.get('name')
                queryset = queryset.filter(name__icontains=name)

            if self.request.query_params.get('min_cost'):
                price_from = self.request.query_params.get('min_cost')
                queryset = queryset.filter(price__gte=price_from)

            if self.request.query_params.get('max_cost'):
                price_to = self.request.query_params.get('max_cost')
                queryset = queryset.filter(price__lte=price_to)

        return queryset


class UserServicesViewSet(viewsets.ModelViewSet):
    queryset = UserService.objects.all().order_by('order_date')
    serializer_class = UserServiceSerializer  # Сериализатор для модели


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('user_name')
    serializer_class = UserSerializer  # Сериализатор для модели
