const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Global variable to track service status
let serviceStatus = 'up';

// Route to get service status
app.get('/api/status', (req, res) => {
  res.json({ status: serviceStatus });
});

// Route to set service status (for demonstration purposes)
app.get('/api/set-status/:status', (req, res) => {
  serviceStatus = req.params.status;
  res.json({ message: `Status set to ${serviceStatus}` });
});

app.listen(port, () => {
  console.log(`Status API listening at http://localhost:${port}`);
});