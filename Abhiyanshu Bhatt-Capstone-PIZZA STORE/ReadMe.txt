MERN Pizza Store Application
-by Abhiyanshu Bhatt

A full-stack production-ready Pizza Store web application built using the MERN stack (MongoDB, Express, React, Node.js).  
The application supports authentication, role-based authorization, cart management, order processing, payment simulation, admin analytics dashboard, and real-time chat.

Frontend
- React (Vite)
- Context API (State Management)
- Axios (API Calls)
- React Router DOM
- Chart.js (Admin Dashboard)
- React Toastify
- Tailwind CSS / CSS

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (Password Hashing)
- Socket.IO (Real-time Chat)
- Jest & Supertest (Testing)


System Architecture

Frontend (React)
    ↓
Axios (JWT Attached)
    ↓
Express Routes
    ↓
Authentication Middleware
    ↓
Service Layer (Business Logic)
    ↓
MongoDB Database

Authentication is stateless using JWT.


Features

 Authentication
- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT-based authentication
- Role-based authorization (User / Admin)

 Menu Management
- Categories (Pizza / Beverages)
- Add / Edit / Delete Menu Items
- Admin-only access

Cart System
- Add to cart
- Remove from cart
- Dynamic total calculation

Order Management
- Create order
- Order history
- Order status tracking

Payment
- Mock payment gateway integration
- Payment status update

Admin Dashboard
- Total Orders
- Total Revenue
- Popular Items
- Chart-based analytics visualization

Real-Time Chat
- Socket.IO-based chat system

Testing
- Unit testing with Jest
- API testing with Supertest


JWT Authentication Flow

1. User logs in
2. Backend generates JWT token
3. Token stored in localStorage
4. Axios interceptor attaches token to every request
5. Backend verifies token via middleware
6. Protected routes are accessible

Stateless authentication — no session storage.



