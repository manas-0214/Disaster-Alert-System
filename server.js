const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define a test route
app.get('/api/test', (req, res) => {
  res.send('Disaster Alert System Backend is running!');
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/earthquakes', async (req, res) => {
    try {
      const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching earthquake data' });
    }
  });
  
