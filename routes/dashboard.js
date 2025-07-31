const express = require('express');
const router = express.Router();
const { db } = require('../database/db');

// Middleware to protect dashboard routes
const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  next();
};

// Admin dashboard
router.get('/admin/dashboard', requireAuth, (req, res) => {
  if (req.session.user.role !== 'admin') {
    return res.status(403).send('Forbidden');
  }

  // Get dashboard data from database
  Promise.all([
    getTotalPayments(),
    getTotalPlastic(),
    getActiveCollectors(),
    getRouteEfficiency(),
    getCollectionTrends(),
    getPlasticDistribution(),
    getTopCollectors(),
    getRecentCollections()
  ]).then(([
    totalPayments, 
    totalPlastic, 
    activeCollectors, 
    routeEfficiency,
    collectionTrends,
    plasticDistribution,
    topCollectors,
    recentCollections
  ]) => {
    res.render('dashboard', {
      user: req.session.user,
      dashboardType: 'admin',
      stats: {
        totalPayments,
        totalPlastic,
        activeCollectors,
        routeEfficiency
      },
      collectionTrends,
      plasticDistribution,
      topCollectors,
      recentCollections
    });
  });
});

// Collector dashboard
router.get('/collector/dashboard', requireAuth, (req, res) => {
  if (req.session.user.role !== 'collector') {
    return res.status(403).send('Forbidden');
  }

  const collectorId = req.session.user.id;
  
  Promise.all([
    getCollectorEarnings(collectorId),
    getCollectorPlastic(collectorId),
    getPlasticPrices(),
    getRecentPayments(collectorId)
  ]).then(([
    totalEarnings,
    totalPlastic,
    plasticPrices,
    recentPayments
  ]) => {
    res.render('dashboard', {
      user: req.session.user,
      dashboardType: 'collector',
      stats: {
        totalEarnings,
        totalPlastic
      },
      plasticPrices,
      recentPayments
    });
  });
});

// Helper functions to get data from database
async function getTotalPayments() {
  return new Promise((resolve) => {
    db.get(`SELECT SUM(amount) AS total FROM payments WHERE status = 'completed'`, (err, row) => {
      resolve(row?.total || 0);
    });
  });
}

async function getTotalPlastic() {
  return new Promise((resolve) => {
    db.get(`SELECT SUM(weight) AS total FROM collections`, (err, row) => {
      resolve(row?.total || 0);
    });
  });
}

async function getActiveCollectors() {
  return new Promise((resolve) => {
    db.get(`SELECT COUNT(DISTINCT collector_id) AS count FROM collections`, (err, row) => {
      resolve(row?.count || 0);
    });
  });
}

async function getRouteEfficiency() {
  return new Promise((resolve) => {
    resolve(87); // Hardcoded for demo
  });
}

async function getCollectionTrends() {
  return new Promise((resolve) => {
    resolve([
      { day: 'Mon', weight: 120 },
      { day: 'Tue', weight: 150 },
      { day: 'Wed', weight: 180 },
      { day: 'Thu', weight: 90 },
      { day: 'Fri', weight: 160 },
      { day: 'Sat', weight: 200 },
      { day: 'Sun', weight: 170 }
    ]);
  });
}

async function getPlasticDistribution() {
  return new Promise((resolve) => {
    resolve([
      { type: 'PET', percentage: 35 },
      { type: 'HDPE', percentage: 25 },
      { type: 'PVC', percentage: 10 },
      { type: 'LDPE', percentage: 15 },
      { type: 'PP', percentage: 10 },
      { type: 'Other', percentage: 5 }
    ]);
  });
}

async function getTopCollectors() {
  return new Promise((resolve) => {
    resolve([
      { name: 'Amina Juma', weight: 84.5, earnings: 5240 },
      { name: 'Samuel Omondi', weight: 76.2, earnings: 4725 },
      { name: 'Grace Atieno', weight: 68.9, earnings: 4270 },
      { name: 'John Kamau', weight: 63.4, earnings: 3930 },
      { name: 'Mary Wanjiku', weight: 58.7, earnings: 3640 }
    ]);
  });
}

async function getRecentCollections() {
  return new Promise((resolve) => {
    resolve([
      { name: 'Amina Juma', plastic: 'PET', weight: 12.4, amount: 768 },
      { name: 'Samuel Omondi', plastic: 'HDPE', weight: 8.7, amount: 539 },
      { name: 'Grace Atieno', plastic: 'PP', weight: 10.2, amount: 632 },
      { name: 'John Kamau', plastic: 'PET', weight: 9.5, amount: 589 },
      { name: 'Mary Wanjiku', plastic: 'LDPE', weight: 7.8, amount: 484 }
    ]);
  });
}

async function getCollectorEarnings(collectorId) {
  return new Promise((resolve) => {
    db.get(`SELECT SUM(amount) AS total FROM payments WHERE collector_id = ?`, [collectorId], (err, row) => {
      resolve(row?.total || 0);
    });
  });
}

async function getCollectorPlastic(collectorId) {
  return new Promise((resolve) => {
    db.get(`SELECT SUM(weight) AS total FROM collections WHERE collector_id = ?`, [collectorId], (err, row) => {
      resolve(row?.total || 0);
    });
  });
}

async function getPlasticPrices() {
  return new Promise((resolve) => {
    resolve([
      { type: 'PET', price: 62.00 },
      { type: 'HDPE', price: 58.50 },
      { type: 'PVC', price: 45.75 },
      { type: 'LDPE', price: 52.25 },
      { type: 'PP', price: 60.80 }
    ]);
  });
}

async function getRecentPayments(collectorId) {
  return new Promise((resolve) => {
    resolve([
      { date: 'Today', amount: 1240, status: 'Received' },
      { date: 'Yesterday', amount: 980, status: 'Received' },
      { date: 'Aug 12', amount: 1150, status: 'Received' },
      { date: 'Aug 11', amount: 875, status: 'Received' },
      { date: 'Aug 10', amount: 1420, status: 'Received' }
    ]);
  });
}

module.exports = router;