# FoodieLand API (Django + DRF)

Community-driven recipes and blogs platform API.

## Quick start (local)
- Create virtualenv and install deps
```
python -m venv venv
./venv/Scripts/activate  # PowerShell
pip install -r requirements.txt
```
- Configure env
```
copy .env.example .env  # set SMTP later for real emails
```
- Run
```
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## OpenAPI docs
- `GET /api/docs/`

### API Endpoints
```

Auth and Firebase Authentication
==================================
| Method | Endpoint                          | Description                         |
| ------ | --------------------------------- | ----------------------------------- |
| POST   | /api/auth/firebase-verify-email/  | Verify email using Firebase         |
| GET    | /api/auth/me/                     | Get current authenticated user      |
| PUT    | /api/auth/me/                     | Update authenticated user           |
| PATCH  | /api/auth/me/                     | Partially update authenticated user |
| POST   | /api/auth/register/               | Register a new user                 |
| POST   | /api/auth/request-password-reset/ | Request password reset email        |
| POST   | /api/auth/reset-password/         | Reset password                      |
| POST   | /api/auth/token/                  | Get JWT token                       |
| POST   | /api/auth/token/refresh/          | Refresh JWT token                   |

Blogs
====================
| Method | Endpoint                               | Description           |
| ------ | -------------------------------------- | --------------------- |
| GET    | /api/blogs/blogs/                      | List all blogs        |
| POST   | /api/blogs/blogs/                      | Create a new blog     |
| GET    | /api/blogs/blogs/{id}/                 | Get blog by ID        |
| PUT    | /api/blogs/blogs/{id}/                 | Replace blog by ID    |
| PATCH  | /api/blogs/blogs/{id}/                 | Update blog partially |
| DELETE | /api/blogs/blogs/{id}/                 | Delete blog           |
| POST   | /api/blogs/blogs/{id}/increment\_view/ | Increment blog views  |

Categories
====================
| Method | Endpoint                          | Description               |
| ------ | --------------------------------- | ------------------------- |
| GET    | /api/blogs/blogs/categories/      | List all categories       |
| POST   | /api/blogs/blogs/categories/      | Create a category         |
| GET    | /api/blogs/blogs/categories/{id}/ | Get category by ID        |
| PUT    | /api/blogs/blogs/categories/{id}/ | Replace category          |
| PATCH  | /api/blogs/blogs/categories/{id}/ | Update category partially |
| DELETE | /api/blogs/blogs/categories/{id}/ | Delete category           |

Comments
====================
| Method | Endpoint                        | Description              |
| ------ | ------------------------------- | ------------------------ |
| GET    | /api/blogs/blogs/comments/      | List all comments        |
| POST   | /api/blogs/blogs/comments/      | Create a comment         |
| GET    | /api/blogs/blogs/comments/{id}/ | Get comment by ID        |
| PUT    | /api/blogs/blogs/comments/{id}/ | Replace comment          |
| PATCH  | /api/blogs/blogs/comments/{id}/ | Update comment partially |
| DELETE | /api/blogs/blogs/comments/{id}/ | Delete comment           |

Contact-Message
====================
| Method | Endpoint                                       | Description              |
| ------ | ---------------------------------------------- | ------------------------ |
| GET    | /api/interactions/contact-messages/            | List contact messages    |
| POST   | /api/interactions/contact-messages/            | Create a contact message |
| GET    | /api/interactions/contact-messages/{id}/       | Get message by ID        |
| PUT    | /api/interactions/contact-messages/{id}/       | Replace message          |
| PATCH  | /api/interactions/contact-messages/{id}/       | Update message partially |
| DELETE | /api/interactions/contact-messages/{id}/       | Delete message           |
| POST   | /api/interactions/contact-messages/{id}/reply/ | Reply to a message       |

Contact-US
===============

| Method | Endpoint                           | Description                 |
| ------ | ---------------------------------- | --------------------------- |
| GET    | /api/interactions/contact-us/      | List contact-us submissions |
| POST   | /api/interactions/contact-us/      | Create a submission         |
| GET    | /api/interactions/contact-us/{id}/ | Get submission by ID        |
| PUT    | /api/interactions/contact-us/{id}/ | Replace submission          |
| PATCH  | /api/interactions/contact-us/{id}/ | Update submission partially |
| DELETE | /api/interactions/contact-us/{id}/ | Delete submission           |

Follows
==========
| Method | Endpoint                            | Description             |
| ------ | ----------------------------------- | ----------------------- |
| GET    | /api/interactions/follows/          | List all follows        |
| POST   | /api/interactions/follows/          | Create a follow         |
| GET    | /api/interactions/follows/{id}/     | Get follow by ID        |
| PUT    | /api/interactions/follows/{id}/     | Replace follow          |
| PATCH  | /api/interactions/follows/{id}/     | Update follow partially |
| DELETE | /api/interactions/follows/{id}/     | Delete follow           |
| POST   | /api/interactions/follows/unfollow/ | Unfollow a user         |

Newsletter
==========

| Method | Endpoint                           | Description                     |
| ------ | ---------------------------------- | ------------------------------- |
| GET    | /api/interactions/newsletter/      | List all newsletter subscribers |
| POST   | /api/interactions/newsletter/      | Subscribe to newsletter         |
| GET    | /api/interactions/newsletter/{id}/ | Get subscriber by ID            |
| PUT    | /api/interactions/newsletter/{id}/ | Replace subscriber              |
| PATCH  | /api/interactions/newsletter/{id}/ | Update subscriber partially     |
| DELETE | /api/interactions/newsletter/{id}/ | Delete subscriber               |

Useres
==========

| Method | Endpoint                      | Description    |
| ------ | ----------------------------- | -------------- |
| GET    | /api/interactions/users/      | List all users |
| GET    | /api/interactions/users/{id}/ | Get user by ID |

Recipes
==========

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | /api/recipes/      | List all recipes        |
| POST   | /api/recipes/      | Create a recipe         |
| GET    | /api/recipes/{id}/ | Get recipe by ID        |
| PUT    | /api/recipes/{id}/ | Replace recipe          |
| PATCH  | /api/recipes/{id}/ | Update recipe partially |
| DELETE | /api/recipes/{id}/ | Delete recipe           |

Categories
==========

| Method | Endpoint                      | Description                |
| ------ | ----------------------------- | -------------------------- |
| GET    | /api/recipes/categories/      | List all recipe categories |
| POST   | /api/recipes/categories/      | Create a category          |
| GET    | /api/recipes/categories/{id}/ | Get category by ID         |
| PUT    | /api/recipes/categories/{id}/ | Replace category           |
| PATCH  | /api/recipes/categories/{id}/ | Update category partially  |
| DELETE | /api/recipes/categories/{id}/ | Delete category            |

Favorites
==========

| Method | Endpoint                        | Description               |
| ------ | ------------------------------- | ------------------------- |
| GET    | /api/recipes/my/favorites/      | List my favorite recipes  |
| POST   | /api/recipes/my/favorites/      | Add recipe to favorites   |
| GET    | /api/recipes/my/favorites/{id}/ | Get favorite by ID        |
| PUT    | /api/recipes/my/favorites/{id}/ | Replace favorite          |
| PATCH  | /api/recipes/my/favorites/{id}/ | Update favorite partially |
| DELETE | /api/recipes/my/favorites/{id}/ | Remove from favorites     |

Ratings
==========
| Method | Endpoint                      | Description             |
| ------ | ----------------------------- | ----------------------- |
| GET    | /api/recipes/my/ratings/      | List my ratings         |
| POST   | /api/recipes/my/ratings/      | Add a rating            |
| GET    | /api/recipes/my/ratings/{id}/ | Get rating by ID        |
| PUT    | /api/recipes/my/ratings/{id}/ | Replace rating          |
| PATCH  | /api/recipes/my/ratings/{id}/ | Update rating partially |
| DELETE | /api/recipes/my/ratings/{id}/ | Delete rating           |
