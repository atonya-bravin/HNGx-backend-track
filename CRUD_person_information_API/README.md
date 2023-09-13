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

- The API can also be used through it's [public domain]()

## API End Points
- **CREATE**: Adding a new person ```/api```
  This the API End-Point we are using to add new users, who will be added with a random uuuid USER_ID.
- **READ**: Fetching details of a person ```/api/user_id```
  This the API End-Point we are using to perform all the other CRUD operations other than Crea