# 🔐 Express Authentication API

A modern, secure authentication API built with **Express.js** and **Supabase**.

## 🚀 Features

- ✅ **JWT Authentication**: Secure token-based authentication system
- ✅ **Supabase Integration**: Robust user management and data storage
- ✅ **API Documentation**: Built-in interactive documentation endpoint
- ✅ **Input Validation**: Request validation using express-validator
- ✅ **CORS Support**: Cross-Origin Resource Sharing enabled
- ✅ **Security Best Practices**: Secure password hashing and token management

## 📦 Installation

Ensure you have **Node.js (16.x or newer)** installed.

```bash
# Clone the repository
git clone https://github.com/yourusername/express-auth-api.git
cd express-auth-api

# Install dependencies
npm install
```

## 🛠️ Configuration

1. Create a `.env` file in the root directory:
```env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
JWT_SECRET=your-jwt-secret-key
PORT=3000
```

2. Set up your Supabase project at [https://supabase.com](https://supabase.com)
3. Enable Email Auth in your Supabase dashboard

## 🚀 Usage

### Start the Server
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or your specified PORT).

### View API Documentation
Open `http://localhost:3000/docs` in your browser to view the interactive API documentation.

## 📡 API Endpoints

### Authentication

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Protected Routes

To access protected routes, include the JWT token in the Authorization header:
```http
GET /protected
Authorization: Bearer <your-jwt-token>
```

## 📁 Project Structure

```
📂 express-auth-api
 ┣ 📂 src
 ┃ ┣ 📂 config        # Configuration files
 ┃ ┣ 📂 controllers   # Route controllers
 ┃ ┣ 📂 middleware    # Custom middleware
 ┃ ┣ 📂 routes        # API routes
 ┃ ┗ 📜 index.js      # Application entry point
 ┣ 📂 supabase
 ┃ ┗ 📂 migrations    # Database migrations
 ┣ 📜 .env            # Environment variables
 ┣ 📜 API.md          # API documentation
 ┗ 📜 package.json    # Project dependencies
```

## 🔒 Security Features

- Password hashing using Supabase Auth
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Secure HTTP headers

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server
- `npm start`: Start production server

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📢 Support

For support, email support@yourdomain.com or open an issue in the GitHub repository.

---

Made with ❤️ by [Your Name]