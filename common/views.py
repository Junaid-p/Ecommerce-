from django.shortcuts import render
from . models import Seller
from . models import Customer
from seller . models import Products
from ang_eco_admin . models import Category
from random import randint
# from django.conf import settings
# from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view
from API.serializer import SellerSerializer
from API.serializer import CustomerSerializer
from API.serializer import cviewproductsSerializer,CategorySerializer

# Create your views here.



@api_view(['POST'])
def seller_reg(request):
   
    try:
        params = request.data
        phn= params['phone']
        pn = str(phn)[6:10]
        print(pn)
        user_name = randint(1111,9999)
        password = 'sell-' + str(user_name)+'-'+pn
        print(password)
        Serialized_data = SellerSerializer(data = params)

        if Serialized_data.is_valid():

            Serialized_data.save(user_name = user_name, password = password)
            msg='sucessfully registered'
            
        else :
            msg = 'form not valid'
    except:
        msg = 'somthing went wrong'
    return JsonResponse({'message':msg})

        
    
        # email_subject = 'Account username and password'
        # email_content = 'Hai your username will be  ' + str(user_name) + 'and password will be' + password

        # send_mail(
        #     email_subject,
        #     email_content,
        #     settings.EMAIL_HOST_USER,
        #     [email,]
        # )
   
@api_view(['POST'])
def seller_login(request):

    params = request.data
    seller_id = params['user_name']
    password = params['password']
    try:
        seller = Seller.objects.get(user_name = seller_id , password = password)
        sname= seller.first_name + seller.last_name
        
        return JsonResponse({'statusCode':200,'token':seller.id,'sname':sname})
 

    except:
        msg ='Invalid credentials'
    
        return JsonResponse({'message':msg})

#--------------------------customer--------------------------------#

@api_view(['POST'])
def customer_reg(request):
    try :
            params = request.data
            Serialized_data = CustomerSerializer(data = params)

            if Serialized_data.is_valid():
                Serialized_data.save()
                status_code = 200
                msg='sucessfully registered'
            
            else :
                print(Serialized_data.errors)
                status_code = 403 
                msg ='form error'

    except Exception as e :
         print(e)
         status_code = 500 
         msg = 'somthing went wrong'

    return JsonResponse({'message':msg,'status':status_code})


@api_view(['POST'])
def customer_login(request):
    params = request.data
    email = params['email']
    password = params['password']
    try:

        customer = Customer.objects.get(email = email , password = password)
        msg="200"
        cname= customer.first_name +' ' + customer.last_name
    except:
       msg = '500'
       
    return JsonResponse({'statusCode':msg ,'C_token':customer.id,'cname':cname})

#-----------------------view product-------------------#
@api_view(['POST'])
def view_products(request):
    cid = request.data
    products = Products.objects.filter(category = cid['cid'])
    serialized_data = cviewproductsSerializer(products,many=True)
    sd = serialized_data.data

    return JsonResponse(sd,safe=False)          

#------------------customer Profile---------------------#

@api_view(['POST'])
def customer_profile(request):
    cid = request.data
    cust_details = Customer.objects.filter(id = cid['cid'])
    serialized_data = CustomerSerializer(cust_details,many=True)
    cdetails = serialized_data.data
      
    return JsonResponse(cdetails ,safe=False)  



def home_category(request):
    category = Category.objects.all()

    serialized_data = CategorySerializer(category,many=True)
    cd = serialized_data.data
    
    return JsonResponse(cd ,safe=False)