const express = require('express');
const router = express.Router();
const { db } = require('../database/db');

// USSD endpoint
router.post('/ussd', (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  
  let response = '';
  let sessionData = {};
  
  if (text === '') {
    // First screen
    response = `CON Welcome to RecycleRoute Kenya
    1. View Collection Routes
    2. Check Plastic Prices
    3. Record Collection
    4. View Payment History`;
  } else if (text === '1') {
    // Get optimized routes
    response = `CON Select your area:
    1. Kibera
    2. Mathare
    3. Kawangware
    4. Dandora`;
  } else if (text.startsWith('1*')) {
    // Process area selection
    const area = text.split('*')[1];
    response = `END Your optimized route for ${getAreaName(area)}:
    Start: Market Area
    -> Collection Point A
    -> Collection Point B
    -> Recycling Center`;
  } else if (text === '2') {
    // Show plastic prices
    response = `END Current Plastic Prices (KES/kg):
    PET: 62.00
    HDPE: 58.50
    PVC: 45.75
    LDPE: 52.25
    PP: 60.80`;
  }
  
  res.set('Content-Type: text/plain');
  res.send(response);
});

function getAreaName(code) {
  const areas = {
    '1': 'Kibera',
    '2': 'Mathare',
    '3': 'Kawangware',
    '4': 'Dandora'
  };
  return areas[code] || 'your area';
}

module.exports = router;