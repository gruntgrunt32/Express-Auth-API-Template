# Authentication API Documentation

Base URL: `http://localhost:3000`

## Endpoints

### Register User
Creates a new user account.

```http
POST /auth/register
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Validation:**
- Email must be a valid email address
- Password must be at least 6 characters long

**Response (201 Created):**
```json
{
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Email already registered"
}
```

### Login
Authenticates a user and returns a JWT token.

```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

**Error Response (401 Unauthorized):**
```json
{
  "error": "Invalid credentials"
}
```

### Protected Route Example
Example of a protected endpoint that requires authentication.

```http
GET /protected
```

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200 OK):**
```json
{
  "message": "This is a protected route",
  "user": {
    "userId": "user_id",
    "email": "user@example.com"
  }
}
```

**Error Responses:**

401 Unauthorized (No token):
```json
{
  "error": "Access token required"
}
```

403 Forbidden (Invalid token):
```json
{
  "error": "Invalid token"
}
```

## Authentication

The API uses JWT (JSON Web Token) for authentication. After successful registration or login, you'll receive a JWT token that should be included in the `Authorization` header for protected routes.

### Token Format
```
Authorization: Bearer <jwt_token>
```

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format:

- `200` - Success
- `201` - Created (for registration)
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing token)
- `403` - Forbidden (invalid token)
- `500` - Internal Server Error

## Rate Limiting

Currently, there is no rate limiting implemented on the API endpoints.

## Security Notes

- Passwords are hashed using bcrypt before storage
- JWT tokens expire after 24 hours
- All endpoints use CORS protection
- Input validation is performed using express-validator
- Authentication is handled by Supabase with additional JWT layer