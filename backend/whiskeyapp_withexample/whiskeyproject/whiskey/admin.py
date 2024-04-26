from django.contrib import admin
from .models import UserAdmin, User, Compound, Whiskey, UserClient
# Register your models here
admin.site.register(UserAdmin)
admin.site.register(UserClient)
admin.site.register(User)
admin.site.register(Compound)
admin.site.register(Whiskey)
