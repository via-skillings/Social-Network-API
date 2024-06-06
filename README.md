# Social-Network-API

## Description:
Node.js API that allows users to perform CRUD operations on social networking data models. The data models include friends, users, thoughts, and reactions. They can be retrieved by their ID or as a collection.

## User Story
```m
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```m
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents:
- [Overview](#Overview)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [License](#License)

# Overview

## Usage Information:
Use insomnia or similar tool to send HTTP requests to the API endpoints and verify that the responses are correct.

## Installation Process:

1. Open documentation run 'npm i' and update '.env'.
2. Once the server is running, use a tool like Insomnia to test the API endpoints. 
3. Use Insomnia to test http://localhost:3003 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.

## Built With:
- JSON
- Javascript
- Mongoose
- Express
- Node.js
- Insomnia
- MongoDB
- Nodemon
- VSC

## What I learned
- Built a RESTful API with Node.js and Mongoose
- Used NoSQL database to handle data
- Used CRUD operations on variables
- Used Insomnia to test API

## License & Copyright ©
  
[License: MIT](https://opensource.org/licenses/MIT)
