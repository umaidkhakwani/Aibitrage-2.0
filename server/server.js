const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001; // Choose a port for your server

app.use(express.json());
app.use(cors());

const coinMarketCap_Api= "bea15024-c66e-465e-89db-1d411266e961";
const coinMarketCap_link= "https://pro-api.coinmarketcap.com";
const apiEndpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';


app.get('/api/cryptocurrency', async (req, res) => {
    console.log("api/cryptocurrency");
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      params: {
        start: 1,
        limit: 6,
        convert: 'USD',
      },
      headers: {
        'X-CMC_PRO_API_KEY': coinMarketCap_Api, // your actual API key
      },
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
