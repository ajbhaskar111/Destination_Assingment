from django.db import models

# Create your models here.
class Master(models.Model):
    Des_title = models.CharField(max_length= 150)
    Des_latitude_number= models.CharField(max_length= 150)
    Des_longitude_number= models.CharField(max_length= 150)

    class Meta:
        db_table = 'destination'

    def __str__(self) -> str:
        return self.Des_title    

class DestinationDetail(models.Model):
    Master = models.ForeignKey(Master, on_delete= models.CASCADE)
    Desimage = models.FileField(upload_to='upload/distation_img/', default='avatar.png')
    Des_description = models.TextField(max_length= 500)

    class Meta:
        db_table = 'destation_details'

    def __str__(self) -> str:
        return self.Master.Des_title   

  
    
     

