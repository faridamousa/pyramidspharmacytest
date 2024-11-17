from django.db import models
from django.contrib.auth.models import User, AbstractUser

# Create your models here.

class Medicine (models.Model):
    name = models.CharField(max_length = 200)
    description = models.TextField()
    dosage = models.CharField(max_length = 50)
    available_quantity = models.IntegerField() 
    created_at = models.DateField(auto_now_add = True)

    def __str__(self):
        return f"{self.name}"
    
class User(AbstractUser):
    is_patient = models.BooleanField(default=False)

    def get_role_model(self):
        if(self.is_staff):
            return 'staff'
        elif (self.is_patient):
            return 'patient'
        
class RefillRequest (models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    medicine = models.ForeignKey(Medicine, on_delete = models.CASCADE)
    quantity = models.IntegerField(default=1)
    created_at = models.DateField(auto_now_add = True)


    def __str__(self):
        return f"refill request for {self.medicine.name} "


