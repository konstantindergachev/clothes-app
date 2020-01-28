const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');


if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const payment = require('./server/routes/api/payment-route');
app.use('/api/payment', payment);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
