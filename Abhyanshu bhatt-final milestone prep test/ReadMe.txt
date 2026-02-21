SmartLearn (Course Enrollment Portal)
-by ABHIYANSHU BHATT
=> Overview
A full-stack MERN application for managing courses and enrollments.

📂 Folder Structure

backend/ 
│ 
├── models/ 
│ ├── Course.js 
│ └── Enrollment.js 
│ 
├── routes/ 
│ ├── courseRoutes.js 
│ └── enrollmentRoutes.js 
│ 
├── middleware/ 
│ └── errorMiddleware.js 
│ 
├── tests/ 
│ └── enrollment.test.js 
│ 
├── app.js 
├── server.js 
├── package.json 
└── .env

frontend/ 
│ 
├── src/ 
│ ├── components/ 
│ │ └── CourseList.js 
│ ├── services/ 
│ │ └── api.js 
│ ├── App.jsx 
│ └── main.jsx 
│ 
├── package.json 
└── vite.config.js



Run Backend Server
-cd backend
-node server.js

PORT=5000
MONGO_URI=mongodb://localhost:27017/smartlearn


Run Frontend

cd frontend
npm run dev

Run Tests

cd backend
npm test

API Endpoints

POST /api/courses
GET  /api/courses
POST /api/enroll

