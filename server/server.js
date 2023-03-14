const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    msg: 'Running DevConnector',
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
