from django.db import models

# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length = 30)
    category_des  = models.CharField(max_length = 100)
    category_image = models.FileField(upload_to = 'category_image/')

    class Meta:
        db_table = 'category_tb'