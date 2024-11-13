from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Medicine (models.Model):
    name = models.CharField(max_length = 200)
    description = models.TextField()
    dosage = models.CharField(max_length = 50)
    available_quantity = models.IntegerField() 
    created_at = models.DateField(auto_now_add = True)

    def __str__(self):
        return f"{self.name}"

class RefillRequest (models.Model):
    medicine = models.ForeignKey(Medicine, on_delete = models.CASCADE)
    quantity = models.IntegerField(default=1)
    created_at = models.DateField(auto_now_add = True)


    def __str__(self):
        return f"refill request for {self.medicine.name} "


