# 📝 BlogMotion: Where Stories Find Motion

https://www.blogmotions.de/

BlogMotion is a full-stack blogging platform that empowers users to share their stories, discover inspiring content, and engage with a vibrant community. With a focus on modern web development practices, BlogMotion leverages a rich technology stack to deliver a seamless user experience.

## 🌟 Project Purpose

BlogMotion is designed to provide users with a dynamic platform where they can:

- Write and publish their own blogs with advanced text editing features.
- Discover, like, and comment on blogs written by other users.
- Manage their personal account information, including password and profile updates.
- Reset forgotten passwords securely via email verification.
- Register or log in using Google OAuth for a hassle-free experience.
- Subscribe to newsletters and make symbolic test payments using Stripe.

## 🎬 Output

## 🛠️ Technologies Used

### **Frontend:**

- **ReactJS** with **TypeScript**: For building a robust and type-safe user interface.
- **Material UI (MUI)**: The primary styling library for a consistent and professional design.
- **Tailwind CSS**: Used selectively for custom styling.
- **Formik & Yup**: For managing and validating forms efficiently, especially for user registration and login.
- **React Router**: Implements navigation through `AppRouter` and `PrivateRouter` for protected routes.
- **@tinymce/tinymce-react**: Provides a rich text editor for blog creation.
- **Redux Toolkit**: Manages global state efficiently, including user authentication and blog data.
- **Redux Persist**: Ensures session persistence for user data across page refreshes.
- **Toastify & SweetAlert**: For interactive user notifications and alerts.
- **React Icons**: Adds visually appealing icons throughout the app.
- **React Share**: Enables users to share blogs across various social platforms.
- **Axios**: Handles HTTP requests to interact with the backend.

### **Backend:**

- **Node.js** with **Express.js**: Provides the foundation for backend services.
- **MongoDB** with **Mongoose**: Handles data storage and schema modeling.
- **JWT (JSON Web Tokens)**: Ensures secure user authentication and protected route access.
- **Nodemailer**: Sends email notifications for password resets and other interactions.
- **Swagger**: Documents API endpoints for easier developer collaboration.
- **Redoc-Express**: Simplifies API documentation presentation.
- **Passport.js (Google OAuth20)**: Enables secure and convenient Google-based login and registration.
- **Stripe**: Processes symbolic newsletter subscription payments.
- **Node Cron**: Schedules recurring tasks, such as automated email reminders.
- **Express-Async-Errors**: Simplifies error handling in asynchronous routes.
- **Validator**: Validates and sanitizes user inputs to ensure data integrity.
- **Morgan**: Logs HTTP requests for monitoring and debugging purposes.
- **Connect-Mongo**: Stores session data in MongoDB for secure user sessions.
- **Cookie-Parser**: Parses cookies for session management.

## ⚙️ Features

### **User Management:**

- Register and log in via email/password or Google OAuth.
- Secure password reset with email verification and a 6-digit code.
- View and update account information, including username, email, and password.
- **Email Verification:** After registration, users must verify their email address to activate their account. A verification link is sent to the user's email.

### **Blog Management:**

- Write blogs using a rich text editor with formatting options.
- View blogs written by other users with like and comment functionalities.
- Share blogs across social media platforms.

### **Payment Integration:**

- Symbolic newsletter subscription payment using Stripe for a test payment.

### **Interactive Notifications:**

- Receive success/error notifications for actions like login, registration, and blog creation.

## 🔐 Authentication Flow

1. **User Authentication:**

   - Login and registration are handled via custom APIs.
   - Secure JWT and simple tokens are generated upon successful login.
   - **Email Verification:** After registration, users receive a verification email to confirm their account.

2. **Protected Routes:**

   - Access to private pages requires a valid JWT or simple token in the request headers.

3. **Google OAuth:**
   - Simplifies user onboarding with Google login.

## 📚 API Documentation

API documentation is available via Swagger UI and Redoc. Access endpoints for testing and integration details:

- Swagger: `/api-docs`
- Redoc: `/redoc`

## 🛒 Stripe Integration

- Stripe is integrated for symbolic newsletter subscriptions.
- Users can subscribe to newsletters with a test payment of 1 Euro.

## 🚀 Development Highlights

- **Full Stack Implementation:** Built with a modern tech stack combining ReactJS, TypeScript, Node.js, and MongoDB.
- **Scalable Design:** Reusable components and modular architecture ensure long-term maintainability.
- **Interactive UI:** Provides a rich and engaging user experience with advanced styling and state management.

<p align="center">🚀 Happy Blogging with BlogMotion! 🚀</p>
