# TutorLink Backend

## 🎓 Find & Connect with the Best Tutors

## Live Site Link - https://tutor-link-tawny.vercel.app/
## backend Link - https://tutor-link-server-two.vercel.app/

This repository contains the backend of TutorLink, a platform that allows students to find tutors, book sessions, and manage their learning journey. The backend is built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Authentication & Authorization:** Secure JWT-based authentication for students and tutors.
- **Tutor Management:** CRUD operations for tutor profiles, subjects, and availability.
- **Booking System:** Students can book tutors, view past sessions, and make payments.
- **Payment Integration:** Supports SSLCommerz payment.
- **Reviews & Ratings:** Students can rate and review tutors.
- **Admin Panel (Optional):** Admins can oversee users, tutor approvals, and platform content.

## 🛠 Tech Stack

- **Backend Framework:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT + bcrypt
- **Payment Gateway:** SSLCommerz, Stripe, or PayPal
- **File Upload:** Multer (if profile pictures are included)

## 🔧 Installation & Setup

### Prerequisites

- Node.js >= 18.x
- MongoDB installed and running

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Faisal146/tutor-link-server
   cd tutorlink-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file and configure MongoDB URI, JWT secret, and payment API keys.
4. Start the server:
   ```sh
   npm run dev
   ```

## 📡 API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user (student/tutor)
- `POST /api/auth/login` - Login and receive a JWT token

### Tutors

- `GET /api/tutors` - Get a list of tutors
- `POST /api/tutors` - Create a new tutor profile (authenticated users only)
- `PATCH /api/tutors/:id` - Update tutor details
- `DELETE /api/tutors/:id` - Delete a tutor profile

### Bookings

- `POST /api/bookings` - Book a tutor
- `GET /api/bookings/student` - Get student booking history
- `GET /api/bookings/tutor` - Get tutor’s booking requests

### Payments

- `POST /api/payment/init` - Process a payment for a session

## 🚀 Deployment

For production deployment:

```sh
npm run build
npm start
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss the proposal.
