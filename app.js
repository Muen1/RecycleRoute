const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const db = require('./database/db');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const ussdRoutes = require('./routes/ussd');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'recycle_route_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Database initialization
db.initialize();

// Routes
app.use('/', authRoutes);
app.use('/', dashboardRoutes);
app.use('/', ussdRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index', { user: req.session.user });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});