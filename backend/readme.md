
## Database instruction
```

## Installation

pip install django
cd whiskeyproject/
python manage.py runserver
```

### Accessing Admin Panel

To access the admin panel, visit http://127.0.0.1:8000/admin/ and use the following credentials:

- **Username:** newadmin
- **Password:** 123456

The database is shown as the figure. You can manage it in the webpage.
![微信截图_20240408214406](C:\Users\dell\Desktop\微信截图_20240408214406.png)

### Adding Example HTML

To use the provided example HTML form for interacting with the API, follow these steps:

1. Find the `example.html` file in the `whiskeyproject/whiskeyapp/templates/` directory.
2. Navigate to http://127.0.0.1:8000/example/ in your web browser.

### Interacting with the API

Once you have accessed the example HTML form, you can use it to interact with the API as follows:

1. Fill in the required information in the form fields.
2. Click the "Add Compound" button to submit the form.
3. Check the console for any success or error messages.

```
[08/Apr/2024 10:53:50] "POST /compound/ HTTP/1.1" 201 50
[08/Apr/2024 10:54:18] "GET /admin/ HTTP/1.1" 200 10130
[08/Apr/2024 10:54:20] "GET /admin/whiskey/compound/ HTTP/1.1" 200 10235
[08/Apr/2024 10:54:20] "GET /admin/jsi18n/ HTTP/1.1" 200 3342
```

### Viewing Added Data

To view the data that you have added using the example HTML form:

1. Navigate to http://127.0.0.1:8000/admin/ in your web browser.
2. Log in using the provided credentials.
3. Navigate to the appropriate model (e.g., Compound or Whiskey) to view the added data.

## Project Structure

```
whiskeyapp/
│
├── __init__.py
├── admin.py
├── apps.py
├── migrations/
│   ├── __init__.py
│   └── ... 
├── models.py  # Define components
├── tests.py   # Call API and test
├── views.py
├── serializers.py
├── templates/  # HTML templates directory
│   └── example.html  # Example HTML form
│
whiskeyproject/
│
├── __init__.py
├── urls.py  # API link
```



Notice: the components are defined in models.py. Make sure submit all forms.

## API Endpoints

### User Admin API

#### Retrieve User Admin List

- **Request Method:** GET
- **Endpoint:** /useradmin/
- **Description:** Retrieves a list of all user admins.
- **Response:** List of user admins.

#### Create New User Admin

- **Request Method:** POST
- **Endpoint:** /useradmin/
- **Description:** Creates a new user admin.
- **Request Body:** JSON object containing the Role field.
- **Response:** Detailed information of the newly created user admin.

### User Client API

#### Retrieve User Client List

- **Request Method:** GET
- **Endpoint:** /userclient/
- **Description:** Retrieves a list of all user clients.
- **Response:** List of user clients.

#### Create New User Client

- **Request Method:** POST
- **Endpoint:** /userclient/
- **Description:** Creates a new user client.
- **Request Body:** JSON object containing the Role field.
- **Response:** Detailed information of the newly created user client.

### User API

#### Retrieve User List

- **Request Method:** GET
- **Endpoint:** /user/
- **Description:** Retrieves a list of all users.
- **Response:** List of users.

#### Create New User

- **Request Method:** POST
- **Endpoint:** /user/
- **Description:** Creates a new user.
- **Request Body:** JSON object containing the Name, Address, Password, and Role fields.
- **Response:** Detailed information of the newly created user.

### Compound API

#### Retrieve Compound List

- **Request Method:** GET
- **Endpoint:** /compound/
- **Description:** Retrieves a list of all compounds.
- **Response:** List of compounds.

#### Create New Compound

- **Request Method:** POST
- **Endpoint:** /compound/
- **Description:** Creates a new compound.
- **Request Body:** JSON object containing the C_Name and C_Flavour fields.
- **Response:** Detailed information of the newly created compound.

### Whiskey API

#### Retrieve Whiskey List

- **Request Method:** GET
- **Endpoint:** /whiskey/
- **Description:** Retrieves a list of all whiskeys.
- **Response:** List of whiskeys.

#### Create New Whiskey

- **Request Method:** POST
- **Endpoint:** /whiskey/
- **Description:** Creates a new whiskey.
- **Request Body:** JSON object containing the W_Name, W_Maker, Compound_id, W_Chemical, W_Chemical_Strength, W_Flavour, W_Contact_name, and W_contact_url fields.
- **Response:** Detailed information of the newly created whiskey.