const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const db = new sqlite3.Database('./database/recycleroute.db');

const initialize = () => {
  db.serialize(() => {
    // Create users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL CHECK(role IN ('admin', 'collector')),
      phone TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create collections table
    db.run(`CREATE TABLE IF NOT EXISTS collections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collector_id INTEGER NOT NULL,
      date DATETIME DEFAULT CURRENT_TIMESTAMP,
      plastic_type TEXT NOT NULL,
      weight REAL NOT NULL,
      amount REAL NOT NULL,
      location TEXT,
      FOREIGN KEY (collector_id) REFERENCES users(id)
    )`);

    // Create payments table
    db.run(`CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collector_id INTEGER NOT NULL,
      amount REAL NOT NULL,
      date DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT DEFAULT 'pending',
      transaction_id TEXT,
      FOREIGN KEY (collector_id) REFERENCES users(id)
    )`);

    // Create default admin user
    const adminEmail = 'admin@recycleroute.co.ke';
    const adminPassword = bcrypt.hashSync('admin123', 8);
    db.get(`SELECT id FROM users WHERE email = ?`, [adminEmail], (err, row) => {
      if (!row) {
        db.run(`INSERT INTO users (name, email, password, role) 
                VALUES (?, ?, ?, ?)`, 
                ['Admin User', adminEmail, adminPassword, 'admin']);
        console.log('Admin user created');
      }
    });

    // Create sample collector
    const collectorEmail = 'collector@example.com';
    const collectorPassword = bcrypt.hashSync('collector123', 8);
    db.get(`SELECT id FROM users WHERE email = ?`, [collectorEmail], (err, row) => {
      if (!row) {
        db.run(`INSERT INTO users (name, email, password, role, phone) 
                VALUES (?, ?, ?, ?, ?)`, 
                ['Amina Juma', collectorEmail, collectorPassword, 'collector', '+254700111222']);
        console.log('Sample collector created');
      }
    });
  });
};

module.exports = {
  db,
  initialize
};