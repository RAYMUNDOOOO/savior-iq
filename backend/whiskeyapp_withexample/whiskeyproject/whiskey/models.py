from django.db import models
from import_export.admin import ImportExportModelAdmin

class UserAdmin(models.Model):
    Id = models.IntegerField(primary_key=True)
    Role = models.CharField(max_length=255)


class UserClient(models.Model):
    Id = models.IntegerField(primary_key=True)
    Role = models.CharField(max_length=255)



class User(models.Model):
    Id = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=255)
    Address = models.CharField(max_length=255)
    Password = models.CharField(max_length=255)
    Role = models.ForeignKey(UserAdmin, on_delete=models.CASCADE)



class Compound(models.Model):
    Compound_id = models.IntegerField(primary_key=True)
    C_Name = models.CharField(max_length=255)
    C_Flavour = models.CharField(max_length=255)


class Whiskey(models.Model):
    Whiskey_ID = models.IntegerField(primary_key=True)
    W_Name = models.CharField(max_length=255)
    W_Maker = models.CharField(max_length=255)
    Compound_id = models.ForeignKey(Compound, on_delete=models.CASCADE)
    W_Chemical = models.CharField(max_length=255)
    W_Chemical_Strength = models.IntegerField()
    W_Flavour = models.CharField(max_length=255)
    W_Contact_name = models.CharField(max_length=255)
    W_contact_url = models.URLField()

