from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import UserAdmin, UserClient, User, Compound, Whiskey


class UserAdminAPITests(APITestCase):
    def setUp(self):
        self.user_admin = UserAdmin.objects.create(Id=1, Role='Administrator')

    def test_create_user_admin(self):
        url = reverse('useradmin-list')
        data = {'Id': 2, 'Role': 'Test Role'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(UserAdmin.objects.count(), 2)

    def test_get_user_admin(self):
        url = reverse('useradmin-detail', kwargs={'pk': self.user_admin.Id})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['Role'], self.user_admin.Role)


class UserClientAPITests(APITestCase):
    def setUp(self):
        self.user_client = UserClient.objects.create(Id=1, Role='Client')

    def test_create_user_client(self):
        url = reverse('userclient-list')
        data = {'Id': 2, 'Role': 'New Client'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(UserClient.objects.count(), 2)

    def test_get_user_client(self):
        url = reverse('userclient-detail', kwargs={'pk': self.user_client.Id})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['Role'], self.user_client.Role)


class UserAPITests(APITestCase):
    def setUp(self):
        self.user_admin = UserAdmin.objects.create(Id=1, Role='Administrator')
        self.user = User.objects.create(Id=1, Name='John Doe', Address='123 Main St', Password='password', Role=self.user_admin)

    def test_create_user(self):
        url = reverse('user-list')
        data = {'Id': 2, 'Name': 'Jane Doe', 'Address': '456 Main St', 'Password': 'password', 'Role': self.user_admin.Id}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)

    def test_get_user(self):
        url = reverse('user-detail', kwargs={'pk': self.user.Id})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['Name'], self.user.Name)


class CompoundAPITests(APITestCase):
    def setUp(self):
        self.compound = Compound.objects.create(Compound_id=1, C_Name='Compound 1', C_Flavour='Flavour 1')

    def test_create_compound(self):
        url = reverse('compound-list')
        data = {'Compound_id': 2, 'C_Name': 'Compound 2', 'C_Flavour': 'Flavour 2'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Compound.objects.count(), 2)

    def test_get_compound(self):
        url = reverse('compound-detail', kwargs={'pk': self.compound.Compound_id})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['C_Name'], self.compound.C_Name)


class WhiskeyAPITests(APITestCase):
    def setUp(self):
        self.compound = Compound.objects.create(Compound_id=1, C_Name='Compound 1', C_Flavour='Flavour 1')
        self.whiskey = Whiskey.objects.create(Whiskey_ID=1, W_Name='Whiskey 1', W_Maker='Maker 1', Compound_id=self.compound, W_Chemical='Chemical 1', W_Chemical_Strength=5, W_Flavour='Flavour 1', W_Contact_name='Contact 1', W_contact_url='http://example.com')

    def test_create_whiskey(self):
        url = reverse('whiskey-list')
        data = {'Whiskey_ID': 2, 'W_Name': 'Whiskey 2', 'W_Maker': 'Maker 2', 'Compound_id': self.compound.Compound_id, 'W_Chemical': 'Chemical 2', 'W_Chemical_Strength': 10, 'W_Flavour': 'Flavour 2', 'W_Contact_name': 'Contact 2', 'W_contact_url': 'http://example2.com'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Whiskey.objects.count(), 2)

    def test_get_whiskey(self):
        url = reverse('whiskey-detail', kwargs={'pk': self.whiskey.Whiskey_ID})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['W_Name'], self.whiskey.W_Name)
