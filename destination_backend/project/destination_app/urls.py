from django.urls import path
from .views import *

urlpatterns = [
    path("detination_location/", Mastershow_api, name="detination_location"),
    path("destination_dat_api/", Destinationshow_api, name="destination_data_api"),
    path("Destinationdetails_data_api/<int:id>", Destinationdetails_data_api, name="Destinationdetails_data_api"),
]