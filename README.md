# RecycleRoute-Kenya 

RecycleRoute Kenya aims to empower waste collectors in Nairobi’s informal settlements by providing accessible, real-time route and pricing information through USSD technology and a responsive admin dashboard. 

## Features
### 1. Waste Collection Services
Offers convenient collection of recyclable waste (e.g., plastics, paper, glass, e-waste) from households, businesses, and institutions.

Scheduled pickups or on-demand collection services.

### 2. Mobile & Digital Platform
Users can request waste pickup via a mobile app or USSD service, making it accessible even without internet.

Real-time tracking of waste collection and rewards.

### 3. Reward System
Incentivizes recycling by offering points or cash rewards for deposited waste.

Rewards can be redeemed for airtime, vouchers, or other benefits.

### 4. Awareness & Education
Conducts community outreach and educational programs on proper waste segregation and recycling.

Partnerships with schools and organizations to promote environmental consciousness.

### 5. Circular Economy Focus
Collaborates with recycling factories to ensure collected waste is processed and reused.

Supports upcycling initiatives to reduce landfill waste.

### 6. Corporate & Community Partnerships
Works with businesses to implement sustainable waste management practices.

Engages community-based organizations to expand recycling efforts.

### 7. Environmental Impact Tracking
Provides reports on waste diverted from landfills and carbon footprint reduction.

### 8. Flexible Drop-off Points
Establishes collection centers in neighborhoods for easy waste disposal

## TechStack
### 1. Frontend (User Interfaces)
Mobile App – Likely built with React Native (for cross-platform Android & iOS) or Flutter for cost efficiency.
Web Dashboard – Possibly React.js or Vue.js for admin and partner portals.
USSD Service – For users without smartphones, using a telco-friendly solution like Africa’s Talking API or Telerivet.

### 2 . Backend (Server & Logic)
Programming Language – Node.js (JavaScript/TypeScript) or Python (Django/Flask) for scalability.
Database – PostgreSQL or Firebase for structured data, with MongoDB for flexible waste tracking.
Authentication – Firebase Auth or JWT for secure logins.

### 3. Cloud & Hosting
Cloud Providers – Likely AWS (Amazon Web Services) or Google Cloud for reliability in Kenya.
Serverless Functions – Possibly AWS Lambda or Google Cloud Functions for scalable backend operations.
APIs & Integrations
Payment Gateways – M-Pesa API (for cash rewards and transactions).
SMS/USSD – Africa’s Talking or Safaricom’s Daraja API for notifications.
Maps & Routing – Google Maps API or Mapbox for optimized waste collection routes.

## How to run it locally
### Prerequisites
Before you begin, make sure you have installed:
- [Node.js (v16+)](https://nodejs.org/)
- [npm (v8+)](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
git clone https://github.com/Muen1/recycle-route-kenya.git
cd recycle-route-kenya
### 2. Install Dependencies
npm install
npm start
### 3. Configure Environment Variables
Create a .env file in the root directory:
Database Initialization
### 4. Run the database setup script:
npm run init-db
### 5. Confirm database file exists:
npm run dev
npm start
### 6. Run 
npm run dev 
Server running on http://localhost:3000

## Accessing the Application
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

## Demo video
https://youtu.be/lxVRQ8NvhzE
