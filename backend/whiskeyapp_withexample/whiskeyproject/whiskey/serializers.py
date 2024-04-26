from rest_framework import serializers
from .models import UserAdmin, User, Compound, Whiskey, UserClient

class UserAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAdmin
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CompoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compound
        fields = '__all__'

class WhiskeySerializer(serializers.ModelSerializer):
    class Meta:
        model = Whiskey
        fields = '__all__'

class UserClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserClient
        fields = '__all__'
