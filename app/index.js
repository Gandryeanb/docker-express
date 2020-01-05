require('dotenv').config();
const express = require('express');
const cuid = require('cuid');
const app = express();
const port = process.env.PORT || 3000;
const randomId = Math.round(Math.random(10) * 1000);

app.get('/ping', (req, res) => {
  return res.status(200).json({
    success: true,
    requestId: cuid(),
    message: 'pong',
    instanceId: randomId,
  });
})

app.listen(port, () => {
  console.log(`> Server running on port ${port}`)
})


