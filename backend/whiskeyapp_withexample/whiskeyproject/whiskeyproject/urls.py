"""
URL configuration for whiskeyproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from whiskey.views import UserAdminView, UserClientView, UserView, CompoundView, WhiskeyView, example_view
from django.contrib import admin
router = DefaultRouter()
router.register('useradmin', UserAdminView)
router.register('userclient', UserClientView)
router.register('user', UserView)
router.register('compound', CompoundView)
router.register('whiskey', WhiskeyView)


urlpatterns = [
	path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('example/', example_view, name='example'),
]
