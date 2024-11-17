from django.shortcuts import render 
from rest_framework.response import Response
from rest_framework import generics
from .serializers import MedicineSerializer, RefillCountSerializer, RefillSerializer, UserSerializer
from .models import Medicine, RefillRequest, User
from django.db.models import Count
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.

class AddMedicineView(generics.CreateAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    permission_classes = [IsAuthenticated]

class ListMedicineView(generics.ListAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    permission_classes = [IsAuthenticated]


class AddRefillView(generics.CreateAPIView):
    queryset = RefillRequest.objects.all()
    serializer_class = RefillSerializer
    permission_classes = [IsAuthenticated]
    

class ListRefillView(generics.ListAPIView):
    queryset = RefillRequest.objects.values("medicine__name").annotate(refill_count=Count('id'))
    serializer_class = RefillCountSerializer
    permission_classes = [IsAuthenticated]

    
class CreateUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class GetCurrentUser(generics.ListAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(data=serializer.data)