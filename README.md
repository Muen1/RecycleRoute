# RecycleRoute-Kenya 

Empowering waste collectors in Nairobi with USSD technology for optimized plastic collection routes and real-time pricing.
---

### Prerequisites

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
### 4 Run the database setup script:
npm run init-db
### 5 Confirm database file exists:
npm run dev
npm start
### 6 Run 
npm run dev 
Server running on http://localhost:3000
### 7 Accessing the Application
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
