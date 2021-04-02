const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const port = 3000;
const app = express();

// For dev purposes
// const morgan = require('morgan');
// app.use(morgan('dev'));

app.use(cors());
app.use(express.static(`${__dirname}/../public`));
app.use('/:id', express.static(`${__dirname}/../public`));

app.get('/product-features/:id', async (req, res) => {
  const { params: { id } } = req;

  try {
    const { data } = await axios.get(`http://localhost:4000/product-features/${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
