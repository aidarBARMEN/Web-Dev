from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)


def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {'product': {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category.id,
        'category_name': product.category.name,
    }}
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {'category': {
        'id': category.id,
        'name': category.name,
        'products': list(category.product_set.values('id', 'name')),
    }}
    return JsonResponse(data)


def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.product_set.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)
