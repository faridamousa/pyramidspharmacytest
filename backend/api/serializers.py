from rest_framework import serializers
from .models import Medicine, RefillRequest
from django.contrib.auth.models import User

class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = ('id', 'name', 'description', 
                  'dosage', 'available_quantity','created_at')


class RefillSerializer(serializers.ModelSerializer):
    medicine = serializers.PrimaryKeyRelatedField(queryset=Medicine.objects.all())  
    class Meta:
        model = RefillRequest
        fields = ('id','medicine', 'quantity','created_at')


class RefillCountSerializer(serializers.Serializer):
    medicine_name = serializers.CharField(source='medicine__name')
    refill_count = serializers.IntegerField()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username',
                  'password')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user