from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.
data = {}

@api_view(['GET'])
def Mastershow_api(request):
    master = Master.objects.all()  
    serializer = MasterSerilazer(master, many=True)  
    return Response(
        {
            "statue": True,
            "message": "Success",
            "data" : serializer.data
        }
)
@api_view(['GET'])
def Destinationshow_api(request):
    desti_show = DestinationDetail.objects.all()  
    serializer = DestinationDetailSerilazer(desti_show, many=True)  
    return Response(
        {
            "statue": True,
            "message": "Success",
            "data" : serializer.data
        }
)
@api_view(['GET'])
def Destinationdetails_data_api(request,id):
    try:
        master_show =  Master.objects.get(id = id)
        master_data_show = MasterSerilazer(master_show, data = data, partial= True)
        # master_result = Master.objects.filter(id = data.get('id')) 
        des_result = DestinationDetail.objects.filter(Master = id) 
        des_data_serializer = DestinationDetailSerilazer(des_result, many=True, context=  {'request': request})
       
         
        if master_data_show.is_valid():
            final_data =  master_data_show.data
            final_data["images"] = des_data_serializer.data
            return Response(
            {
                "statue": True,
                "message": "Success",
                "data" : final_data
                
            })
       
    except Exception as err:
        print(err)  
        return Response({
                "statue": False,
                "message": "Id is Not Valid",
                "data" : {}
                
            })
     



    