const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.static('public'));

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        apiKey: process.env.NEWS_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

const port = process.env.PORT || 8080;  // Use Render's default port if available
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
