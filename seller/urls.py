from django.urls import path
from . import views

urlpatterns = [
    
    path('addproduct',views.addproduct),
    path('change_pswd',views.change_pswd),
  
]