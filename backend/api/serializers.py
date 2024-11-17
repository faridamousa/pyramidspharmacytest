from rest_framework import serializers
from .models import Medicine, RefillRequest,User 
#from django.contrib.auth.models import User

class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = ('id', 'name', 'description', 
                  'dosage', 'available_quantity','created_at')

class UserSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name','last_name','email', 'is_staff','is_patient',
                  'password', 'role')
    
    def get_role(self, obj):
        if obj.is_staff:
            return 'staff'
        elif obj.is_patient:
            return 'patient'

    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
               

class RefillSerializer(serializers.ModelSerializer):
    medicine = serializers.PrimaryKeyRelatedField(queryset=Medicine.objects.all())  
    class Meta:
        model = RefillRequest
        fields = ('id','user','medicine', 'quantity','created_at')


class RefillCountSerializer(serializers.Serializer):
    medicine_name = serializers.CharField(source='medicine__name')
    refill_count = serializers.IntegerField()