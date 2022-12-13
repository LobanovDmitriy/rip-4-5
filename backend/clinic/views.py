from rest_framework import viewsets, status
from dynamic_rest import viewsets as dynviewsets  # dynviewsets.DynamicModelViewSet
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_jwt.utils import jwt_decode_handler

from clinic.serializers import ServicesSerializer, UserServiceSerializer, UserServiceDepthSerializer, UserSerializer, \
    LoginRequestSerializer
from clinic.models import Services, UserService, User
from django.contrib.auth import authenticate, login
from django.http import HttpResponse


@api_view(['GET', 'POST'])
def getJson(request):
    if request.method == 'POST':
        user = User.objects.create_user(request.data['username'], request.data['email'], request.data['password'])
        user.save()
        return HttpResponse(
            '{"username": "' + request.data['username'] + '", "email": "' + request.data['email'] + '"}')
    else:
        return HttpResponse("{'status': 'nok'}")


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login(request: Request):
#     serializer = LoginRequestSerializer(data=request.data)
#     if serializer.is_valid():
#         authenticated_user = authenticate(**serializer.validated_data)
#         if authenticated_user is not None:
#             login(request, authenticated_user)
#             return Response({'status': 'Success'})
#         else:
#             return Response({'error': 'Invalid credentials'}, status=403)
#     else:
#         return Response(serializer.errors, status=400)


@api_view()
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def user(request: Request):
    print(UserSerializer(request.user).data)
    return Response({
        'data': UserSerializer(request.user).data
    })


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

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        user_id = False
        if request.headers.get("Authorization"):
            decoded_payload = jwt_decode_handler(request.headers.get("Authorization")[7:])
            user_id = decoded_payload.get('user_id')
            print(User.objects.get(id=user_id).is_superuser)
        if user_id:
            if User.objects.get(id=user_id).is_superuser:
                instance.name = request.data.get("name")
                instance.description = request.data.get("description")
                instance.price = request.data.get("price")
                instance.save()
                return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def destroy(self, request, *args, **kwargs):
        user_id = False
        if request.headers.get("Authorization"):
            decoded_payload = jwt_decode_handler(request.headers.get("Authorization")[7:])
            user_id = decoded_payload.get('user_id')
            print(User.objects.get(id=user_id).is_superuser)
        if user_id:
            if User.objects.get(id=user_id).is_superuser:
                instance = self.get_object()
                self.perform_destroy(instance)
                return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def create(self, request, *args, **kwargs):
        user_id = False
        if request.headers.get("Authorization"):
            decoded_payload = jwt_decode_handler(request.headers.get("Authorization")[7:])
            user_id = decoded_payload.get('user_id')
            print(User.objects.get(id=user_id).is_superuser)
        if user_id:
            if User.objects.get(id=user_id).is_superuser:
                max_id = Services.objects.values_list('idservice', flat=True).order_by('-idservice').first()
                service = Services.objects.create(name=request.data['name'], description=request.data['description'],
                                                  price=request.data['price'], idservice=max_id+1)
                service.save()
                print(request.data)
                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_403_FORBIDDEN)

    # @api_view("POST")
    # def list(self, request, *args, **kwargs):
    #     if self.request.method == 'POST':
    #         serializer = self.get_serializer(data=request.data)
    #         serializer.is_valid(raise_exception=True)
    #         self.perform_create(serializer)
    #         return Response(status=status.HTTP_201_CREATED)


@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
class UserServicesViewSet(viewsets.ModelViewSet):
    queryset = UserService.objects.all().order_by('order_date')
    serializer_class = UserServiceSerializer  # Сериализатор для модели


@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
class UserServicesDepthViewSet(viewsets.ModelViewSet):
    queryset = UserService.objects.all().order_by('order_date')
    serializer_class = UserServiceDepthSerializer  # Сериализатор для модели

    def get_queryset(self):
        queryset = UserService.objects.all().order_by('order_date')
        params = self.request.query_params.dict()
        if len(params) > 0:
            if params['id']:
                queryset = UserService.objects.filter(id_user_id=params['id'])
        return queryset

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = request.data.get("params")['status']
        print(request.data)
        print(request.data.get("params")['status'])
        instance.save()
        return Response(status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer  # Сериализатор для модели
