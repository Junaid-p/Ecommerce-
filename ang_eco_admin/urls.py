
from django.urls import path
from . import views

urlpatterns = [
    
    path('add_category',views.add_category),
    path('view_seller',views.view_seller),
    path('view_customer',views.view_customer),
    path('view_category',views.view_category),
  
]