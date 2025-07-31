# RecycleRoute-Kenya 

Empowering waste collectors in Nairobi with USSD technology for optimized plastic collection routes and real-time pricing.
---

### Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [Database Initialization](#database-initialization)
4. [Running the Application](#running-the-application)
5. [Accessing the Application](#accessing-the-application)
6. [Testing Credentials](#testing-credentials)
7. [Project Structure](#project-structure)
8. [Troubleshooting](#troubleshooting)
9. [License](#license)
10. [Support](#support)

---

## Prerequisites

Before you begin, make sure you have installed:
- [Node.js (v16+)](https://nodejs.org/)
- [npm (v8+)](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 1 Clone the Repository
git clone https://github.com/Muen1/recycle-route-kenya.git
cd recycle-route-kenya

### 2 Install Dependencies
Copy
Edit
npm install

### 3 Configure Environment Variables
Create a .env file in the root directory:

Database Initialization
1 Run the database setup script:
npm run init-db
2 Confirm database file exists:
npm run dev
npm start
Server running on http://localhost:3000
Accessing the Application
Open your browser and visit
http://localhost:3000

## Project Structure
recycle-route-kenya/
├── public/            # Static files (CSS, JS)
├── views/             # EJS templates
│   ├── index.ejs
│   └── dashboard.ejs
├── routes/            # Express routes
│   ├── auth.js
│   ├── dashboard.js
│   └── ussd.js
├── database/          
│   └── db.js          # Database config
├── app.js             # Entry point
├── package.json       
└── README.md          # This file
