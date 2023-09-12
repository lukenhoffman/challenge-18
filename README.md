# challenge-18
Social Media API
Table of Contents
Description
User Story
Acceptance Criteria
Technologies Used
Installation
Usage
API Routes
Testing
Contributing
License
Questions
Description
This is a social media API that provides functionality for a social network application. It uses a NoSQL database (MongoDB) to handle large amounts of unstructured data efficiently. This API allows users to create, retrieve, update, and delete users, thoughts, reactions to thoughts, and manage their friend lists.

User Story
md
Copy code
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
Acceptance Criteria
md
Copy code
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Insomnia (for testing)
CORS
dotenv
Installation
Clone this repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd social-media-api
Install the required dependencies:

bash
Copy code
npm install
Set up your MongoDB database and configure the connection in the .env file.

Usage
Start the API server:

bash
Copy code
npm start
Use a tool like Insomnia to test the API routes as described in the Acceptance Criteria.

API Routes
GET /api/users: Retrieve a list of all users.

GET /api/users/:id: Retrieve a specific user by their ID.

POST /api/users: Create a new user.

PUT /api/users/:id: Update a user's information.

DELETE /api/users/:id: Delete a user.

POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

GET /api/thoughts: Retrieve a list of all thoughts.

GET /api/thoughts/:id: Retrieve a specific thought by its ID.

POST /api/thoughts: Create a new thought.

PUT /api/thoughts/:id: Update a thought.

DELETE /api/thoughts/:id: Delete a thought.

POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

Testing
Use tools like Insomnia or Postman to test the API routes. Ensure that you follow the Acceptance Criteria to verify the functionality.

Contributing
Contributions are welcome! If you have any suggestions, feature requests, or find any issues, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Questions
If you have any questions or need further assistance, please feel free to contact me:

GitHub: lukenhoffman
Email: kukenhoffman@gmail.com
