# RecycleRoute-Kenya 

Empowering waste collectors in Nairobi with USSD technology for optimized plastic collection routes and real-time pricing.
---

## 📋 Table of Contents
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

## ✅ Prerequisites

Before you begin, make sure you have installed:
- [Node.js (v16+)](https://nodejs.org/)
- [npm (v8+)](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## 🚀 Setup Instructions

Follow these steps carefully:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Muen1/recycle-route-kenya.git
cd recycle-route-kenya

2️⃣ Install Dependencies
bash
Copy
Edit
npm install
This will install all required packages:

Express.js

EJS

SQLite3

Chart.js

Bootstrap

3️⃣ Configure Environment Variables
Create a .env file in the root directory:

bash
Copy
Edit
touch .env
Open .env and add the following:

env
Copy
Edit
PORT=3000
SESSION_SECRET=your_secure_secret_here
NODE_ENV=development
Replace your_secure_secret_here with a strong, random string.

🛠 Database Initialization
1️⃣ Run the database setup script:
bash
Copy
Edit
npm run init-db
Expected output:

pgsql
Copy
Edit
Database initialized successfully
Admin user created: admin@recycleroute.co.ke
Sample collector created: collector@example.com
2️⃣ Confirm database file exists:
bash
Copy
Edit
/database/recycleroute.db
🏃‍♂️ Running the Application
Choose one of these modes:

✅ Development Mode (with auto-restart)
bash
Copy
Edit
npm run dev
🚀 Production Mode
bash
Copy
Edit
npm start
Expected output:

arduino
Copy
Edit
Server running on http://localhost:3000
Database connected successfully
🌐 Accessing the Application
Open your browser and visit:

arduino
Copy
Edit
http://localhost:3000
You can explore:

Home page

USSD simulation (384888#)

Admin dashboard

Collector dashboard

🔑 Testing Credentials
Use these accounts to log in:

Admin Dashboard
Email: admin@recycleroute.co.ke

Password: admin123

Collector Dashboard
Email: collector@example.com

Password: collector123

🗂 Project Structure
csharp
Copy
Edit
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
🛠 Troubleshooting
Problem: Dependencies not installing
bash
Copy
Edit
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
Problem: Database connection issues
bash
Copy
Edit
rm database/recycleroute.db
npm run init-db
Problem: Port already in use
bash
Copy
Edit
lsof -i :3000
kill -9 <PID>   # Replace <PID> with the process ID
Problem: Styles not loading
Clear browser cache (Ctrl+Shift+R)

Check that files exist under public/css/

📄 License
This project is licensed under the MIT License.
See LICENSE for details.

📬 Support
For help or feedback:

📧 Email: support@recycleroute.co.ke

🐦 Twitter: @RecycleRouteKE

✅ This README covers everything:

All setup steps

Clear commands

Environment config

Expected output

Test credentials

Project structure & troubleshooting

If you'd like, I can also help you write a short section for deployment (e.g., to Heroku, Render, or Vercel).
Let me know! 🚀

yaml
Copy
Edit

---

✅ **Next step (important):**  
After you copy this into your `README.md` file, save the file, then do:

```bash
git add README.md
git commit -m "Add comprehensive README.md"
git push
