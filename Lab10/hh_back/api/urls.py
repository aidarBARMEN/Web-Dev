from django.urls import path, re_path
from api.views import get_companies, get_company, get_vacancies, get_vacancy, top_vacancies, get_vacancies_by_company
urlpatterns = [
    path('companies/', get_companies),
    path('companies/<int:pk>/', get_company),
    path('companies/<int:company_id>/vacancies/', get_vacancies_by_company),
    path('vacancies/', get_vacancies),
    path('vacancies/<int:pk>/', get_vacancy),
    path('vacancies/top_ten/', top_vacancies)


]
