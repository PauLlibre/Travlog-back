# TRAVLOG API

Welcome to the TRAVLOG API! This API allows you to register and login to the TRAVLOG platform, as well as interact with posts on the platform.

## Authentication Endpoints

### Register
Registers a new user with the given credentials.

```bash
POST /auth/register
Example request body:

json
Copy code
{
  "name": "Pau Houston",
  "email": "pau@email.com",
  "password": "abcd1234",
  "birthday": "1963-08-09T00:00:00.000Z",
  "sex": "female",
  "nationality": "American"
}
Login
Logs in a user with the given email and password.

bash
Copy code
POST /auth/login
Example request body:

json
Copy code
{
  "email": "pau@email.com",
  "password":"abcd1234"
}
Interactions Endpoints
Give / Remove Likes
Adds or removes a like for a post by the specified user.

bash
Copy code
POST /likes
Example request body:

json
Copy code
{
  "id":"63e0c27bfdbb482f4287e758",
  "post_id": "63dcf8a1ef87c62696924304"
}
Get Post Likes
Gets the number of likes for a specified post.

bash
Copy code
GET /likes/postLikes/:postId
Get User Likes
Gets the list of posts that the specified user has liked.

bash
Copy code
GET /likes/userLikes/:userId
Rate Post
Rates a post with a + or - rating by the specified user.

ruby
Copy code
POST /route/:routeId/like
Example request body:

json
Copy code
{
  "user_id":"63eb8db996d38410dbd21cd9",
  "rating":"+"
}
Rate Comment
Rates a comment on a post with a + or - rating by the specified user.

ruby
Copy code
POST /rate/route/:routeId/:commentId
Example request body:

json
Copy code
{
  "rating":"-",
  "user_id":"63daf23c7456d0c0c5e8a277"
}
Posts Endpoints
Make Post
Creates a new post with the given title, description, and user ID.

bash
Copy code
POST /post
Example request body:

json
Copy code
{
  "title": "Pepe",
  "description": "Dive into the crystal clear waters of the Great Barrier Reef and discover the diverse marine life that call this natural wonder home",
  "user_id": "63dcf6d4ef87c626969242f3"
}
Get Post By Id
Gets the details of the specified post.

bash
Copy code
GET /post/:postId
Get Posts By User
Gets the list of posts made by the specified user.

bash
Copy code
GET /post/userPosts/:userId
Delete Post
Deletes the specified post.

bash
Copy code
DELETE /post/:postId
Contributing
If you would like to contribute to this project, please open an issue or submit a pull request on the GitHub repository.

Copy code


