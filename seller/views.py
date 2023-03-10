from django.shortcuts import render
from API.serializer import productsSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view
from common.models import Seller
# Create your views here.

@api_view(['POST'])
def addproduct(request):

        msg = ""
        params = request.data
        Serialized_data = productsSerializer(data = params)
        if Serialized_data.is_valid():
            Serialized_data.save()
            msg='400 ok'
        else :
           msg = '401 unautherised'


        return JsonResponse({'statusCode':msg})

@api_view(['PUT'])
def change_pswd(request):
    msg ='ss'
    error = ''
    succsess = ''
    params = request.data
    old_password = params['old_password']
    print(old_password)
    new_password = params['new_password']
    print(new_password)
    confirm_password = params['confirm_password']
    print(confirm_password)
    seller_details = Seller.objects.get(id=22)
    print(seller_details.password)

    if old_password == seller_details.password:
            
            if len(new_password) >= 8:
                if new_password == confirm_password:
                    seller_details.password=new_password
                    seller_details.save()
                    succsess='success'

                else:
                    error = 'password does not match'
            else:
                error = 'password should be minimum 8 charecter'

    else:
        error = 'check your old password'

    return JsonResponse({'msg':msg})
