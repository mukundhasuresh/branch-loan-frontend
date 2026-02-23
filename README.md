# Branch Loan – Frontend

A modern, production-ready fintech dashboard for intelligent loan management, fraud detection, and real-time financial analytics.

Branch Loan is designed as a **startup-grade banking platform** that automates loan workflows, detects suspicious financial activity, and provides deep insights through powerful dashboards and live monitoring.

---

## Why This Project is Unique

Most loan management projects focus only on CRUD operations.
Branch Loan goes beyond that by implementing real-world banking concepts such as:

* Fraud detection with dynamic risk scoring
* Multi-role loan approval workflow
* Real-time notifications
* Advanced analytics dashboards
* Secure authentication with HTTP-only cookies
* Modern fintech UI inspired by Stripe, Apple, and Razorpay
* Production-ready architecture and deployment

---

## Key Features

### Authentication & Security

* Secure cookie-based JWT authentication
* Protected routes
* Role-based access control
* Enterprise-grade security architecture

### Fraud Detection & Risk Monitoring

* Dynamic fraud scoring
* High-risk loan flagging
* Suspicious activity monitoring
* Dedicated fraud dashboard

### Analytics & Insights

* Loan distribution visualizations
* Risk analytics
* Real-time dashboard updates
* Financial intelligence features

### Loan Workflow Automation

* Employee → Manager → Admin approval flow
* Automated decision pipelines
* Status tracking and workflow visualization

### Real-Time Notifications

* Instant fraud alerts
* Approval notifications
* Live system monitoring
* Event-driven architecture using sockets

### Modern UI / UX

* Apple-inspired design
* Dark mode support
* Responsive mobile-first layout

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Recharts
* Context API
* Socket.IO Client
* React Router
* Lucide Icons

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Docker Support

This project supports containerized deployment for both frontend and backend, ensuring consistency across development, staging, and production environments.

---

##  Running Frontend with Docker

1. Build the Docker image
``` docker build -t branch-loan-frontend ```

2. Run the container
``` docker run -p 3000:3000 branch-loan-frontend ```

3. Open in browser
``` http://localhost:3000 ```

---

## Project Structure

```
src/
 ├── api/
 ├── components/
 ├── context/
 ├── layouts/
 ├── pages/
 │   ├── auth/
 │   ├── dashboard/
 │   ├── loans/
 │   ├── fraud/
 │   └── notifications/
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Environment Setup

### 1️. Clone the repository

```bash
git clone <your-frontend-repo-url>
cd branch-loan-frontend
```

---

### 2️. Install dependencies

```bash
npm install
```

---

### 3️. Create environment variables

Create a `.env` file in the root:

```
VITE_API_URL=https://branch-loan-backend.onrender.com
```

---

### 4️. Run the project

```bash
npm run dev
```

---

## 🌐 Live Demo

Frontend:
[https://your-vercel-domain.vercel.app](https://branch-loan-frontend.vercel.app/)

Backend:
https://branch-loan-backend.onrender.com

---

## Mobile Responsiveness

The application is fully responsive and optimized for:

* Desktop
* Tablets
* Mobile devices

---

## Security Highlights

* HTTP-only cookie authentication
* Secure CORS configuration
* Protected API routes
* Role-based authorization
* Production environment setup

---

## Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork this repository and submit pull requests.

---

## Contact

For collaboration or feedback:

* LinkedIn: *https://www.linkedin.com/in/mukundha-suresh-390309203/*
* Email: *mukundhasuresh@gmail.com*

---

## Support

If you like this project, please consider giving it a ⭐ on GitHub.
It helps the project reach more developers and recruiters.

---

## 📄 License

This project is licensed under the MIT License.
