from rest_framework import serializers
from .models import *

class MasterSerilazer(serializers.ModelSerializer):

    class Meta:  
        model = Master  
        fields = ('__all__')  

   
class DestinationDetailSerilazer(serializers.ModelSerializer):

    class Meta:  
        model = DestinationDetail  
        fields = ('__all__')  
