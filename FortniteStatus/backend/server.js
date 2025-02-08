const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/status', async (req, res) => {
  try {
    const response = await axios.get('https://api.fortnite.com/v1/status'); // 仮のAPIエンドポイント
    const data = response.data;
    res.json({
      serverStatus: data.status,
      playerCount: data.playerCount
    });
  } catch (error) {
    console.error('Error fetching status:', error);
    res.status(500).send('Error retrieving status');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
