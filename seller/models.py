from django.db import models
from common.models import Seller
from ang_eco_admin.models import Category
# Create your models here.





class Products(models.Model):
    seller = models.ForeignKey(Seller,on_delete=models.CASCADE,default=0)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,default=0)
    product_name = models.CharField(max_length=40)
    product_no =models.BigIntegerField()
    product_des = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    stock = models.IntegerField(default=0)
    product_image = models.ImageField(upload_to='products/')
    
    class Meta:
        db_table ='products_tb'        
