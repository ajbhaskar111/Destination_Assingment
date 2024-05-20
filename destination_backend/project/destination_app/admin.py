from django.contrib import admin
from .models import *

# Register your models here.
class MasterData_show(admin.ModelAdmin):
    list_display = ["id", "Des_title", "Des_latitude_number", "Des_longitude_number"]

class DestinationDetailData_show(admin.ModelAdmin):
    list_display = ["id" , "Master", "Desimage", "Des_description"]  


admin.site.register(Master,MasterData_show)
admin.site.register(DestinationDetail,DestinationDetailData_show)

