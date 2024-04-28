from django.contrib import admin
from .models import User, Compound, Whiskey, UserClient
from import_export import resources
from import_export.admin import ImportExportModelAdmin

class UserResource(resources.ModelResource):
    class Meta:
        model = User

@admin.register(User)
class UserAdmin(ImportExportModelAdmin):
    resource_class = UserResource

class CompoundResource(resources.ModelResource):
    class Meta:
        model = Compound

@admin.register(Compound)
class CompoundAdmin(ImportExportModelAdmin):
    resource_class = CompoundResource

class WhiskeyResource(resources.ModelResource):
    class Meta:
        model = Whiskey
        skip_unchanged = True
        report_skipped = False
        import_id_fields = ['Whiskey_ID']
        fields = (
            'Whiskey_ID', 'W_Name', 'W_Maker', 'Compound_id',
            'W_Chemical', 'W_Chemical_Strength', 'W_Flavour',
            'W_Contact_name', 'W_contact_url',
        )

@admin.register(Whiskey)
class WhiskeyAdmin(ImportExportModelAdmin):
    resource_class = WhiskeyResource

class UserClientResource(resources.ModelResource):
    class Meta:
        model = UserClient

@admin.register(UserClient)
class UserClientAdmin(ImportExportModelAdmin):
    resource_class = UserClientResource
