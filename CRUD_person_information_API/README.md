# CRUD Person Information API
This is an API that performs the CRUD operations i.e Creation, Retrival, Update, and Deletion of a person's details.
This ApI basically maintains the following information:
- The person's name
- The person's age
- Ther person's email

## Usage
The API can be used in two basic ways;
- The API can be used in the local machine through forking into personal repos then cloning.
    - Fork the [repo](https://github.com/atonya-bravin/HNGx-backend-track)
    - Then clone the repo into your local machine

- The API can also be used through it's [public domain](https://crud-person-information-api.onrender.com)
### Exmaple of Usage
**User Creation**
  
This is an example of how to add users to the CRUD API
  
    ```
    https://crud-person-information-api.onrender.com/api?user_name=Bravin&user_age=25&user_email=bravinatonya@gmail.com
    ```
  
**Request type** ==> **POST**
  
    This will create a user and insert the provided information to the database. It will then return a message showing you the ID of the user added as under;
  
    ```
    User added successfully with USER_ID: 5e620ac5-5549-410e-b32c-19826f75caa7
    ```
  
**User Update**
  
This is an example of how to update user information on the CRUD API using the ***action*** query parameter.
  
   ```
    https://crud-person-information-api.onrender.com/api/5e620ac5-5549-410e-b32c-19826f75caa7?action=update&user_name=Bravin&user_age=25&user_email=bravinatonya@gmail.com
   ```
  
**Request type** ==> **Get**
  
   To update the information of the user in the database, we use the ***action*** query parameter. We also suply the USER_ID in the path to facilitate an update to a specific user.
   This will return the following message to show success
  
   ```
   Updated user of id 5e620ac5-5549-410e-b32c-19826f75caa7 successfully
   ```
**User Deletion**
  
This is an example of how to delete user information on the CRUD API using the ***action*** query parameter.
  
   ```
   https://crud-person-information-api.onrender.com/api/5e620ac5-5549-410e-b32c-19826f75caa7?action=delete
   ```
   To delete the information of the user in the database, we use the ***action*** query parameter. We also suply the USER_ID in the path to facilitate a deletion of a specific user.
   This will return the following message to show success
  
   ```
   Deleted user of id 5e620ac5-5549-410e-b32c-19826f75caa7 successfully
   ```
**User Information Retrival**
  
  The application has two ways of retriving it's data.
  - Single user retrival
  This is the retrival of information of a specific user using the user's USER_ID.
    This is an example of how to retrive user information on the CRUD API using the ***action*** query parameter.
  
   ```
   https://crud-person-information-api.onrender.com/api/246c64b6-5e5a-4e5d-b968-4bdf1359040d?action=read
   ```
   To read the information of a specific user from the database, we use the ***action*** query parameter. We also suply the USER_ID in the path to facilitate a retrival of a specific user.
   This will return the following message to show success
  
   ```
      {
        "_id": "246c64b6-5e5a-4e5d-b968-4bdf1359040d",
        "name": "Bravin",
        "age": 25,
        "email": "bravinatonya@gmail.com",
        "__v": 0
      }
   ```
   - Full Person document retrival
   This is the retrival of information of contained in the person document.
    This is an example of how to retrive user information on the CRUD API using the ***action*** query parameter.
  
   ```
   https://crud-person-information-api.onrender.com/api/246c64b6-5e5a-4e5d-b968-4bdf1359040d?action=readAll
   ```
   To read the information of a specific user from the database, we use the ***action*** query parameter. We also suply the USER_ID in the path to facilitate a retrival of a specific user.
   This will return the following message to show success
  
   ```
      [
        {
            "_id": "12cb2667-a500-49d0-9b36-50fb10f2cca7",
            "name": "Bravin",
            "age": 25,
            "email": "bravin@gmail.com",
            "__v": 0
        },
        {
            "_id": "4db463af-2d59-4e16-9f90-00f0585d892a",
            "name": "Bravin",
            "age": 25,
            "email": "bravin@gmail.com",
            "__v": 0
        },
        {
            "_id": "7a25758b-bf34-40be-86a8-abbc6b90cdd3",
            "__v": 0
        },
        {
            "_id": "8bdc39bf-eb57-48af-b605-939a7f14bd07",
            "__v": 0
        },
        {
            "_id": "246c64b6-5e5a-4e5d-b968-4bdf1359040d",
            "name": "Bravin",
            "age": 25,
            "email": "bravinatonya@gmail.com",
            "__v": 0
        }
      ]
   ```
## API End Points
- **CREATE**: Adding a new person ```/api```
  This is the API End-Point we are using to add new users, who will be added with a random uuuid USER_ID.
- **READ**: Fetching details of a person ```/api/user_id```
  This is the API End-Point we are using to perform all the other CRUD operations other than Create
  To read specific user information, we use the query parameter ```action=read```
  To read all user information, we use the query parameter ```action=readAll```
- **Delete**: Removing a person  ```/api/user_id```
  This is the API End-Point we are using to perform all the other CRUD operations other than Create
  To delete, we use the query parameter ```action=delete```
- **Update**: Modifying details of an existing person ```/api/user_id```
  This is the API End-Point we are using to perform all the other CRUD operations other than Create
  To delete, we use the query parameter ```action=update```

## Query parameters to use
In the creation and the update of users, we will have to use query parameters as listed under
- **action** ==> Used to show the action to perform on the data; update, delete, read, readAll.
- **user_name** ==> used to show the name of the user to perform the CRUD operation on.
- **user_age** ==> used to show the age of the user.
- **user_email** ==> used to show the email of the user
An example of how to use the query operators is as under.
```
    https://crud-person-information-api.onrender.com/api/5e620ac5-5549-410e-b32c-19826f75caa7?action=update&user_name=Bravin&user_age=25&user_email=bravinatonya@gmail.com
   ```