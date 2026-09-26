require('dotenv').config();
const express = require('express')
const cors = require('cors');



const app = express()
const port = 3000;

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));


app.get('/api/status', (req, res) => {
  res.json({
    status: 'Coming soon',
    timestamp: new Date().toISOString(),
    message: 'Stay tuned for updates!'
  });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
