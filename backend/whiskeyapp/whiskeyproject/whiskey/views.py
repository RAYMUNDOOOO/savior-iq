from django.shortcuts import render
from rest_framework import viewsets
from .models import User, UserAdmin, Compound, Whiskey, UserClient
from .serializers import UserAdminSerializer, UserClientSerializer, UserSerializer, CompoundSerializer, WhiskeySerializer

class UserAdminView(viewsets.ModelViewSet):
    queryset = UserAdmin.objects.all()
    serializer_class = UserAdminSerializer

class UserClientView(viewsets.ModelViewSet):
    queryset = UserClient.objects.all()
    serializer_class = UserClientSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CompoundView(viewsets.ModelViewSet):
    queryset = Compound.objects.all()
    serializer_class = CompoundSerializer

class WhiskeyView(viewsets.ModelViewSet):
    queryset = Whiskey.objects.all()
    serializer_class = WhiskeySerializer

def example_view(request):
    return render(request, 'whiskey/example.html')
