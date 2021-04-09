require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const port = 3000;
const app = express();

const { productFeaturesHost, reviewsHost, checkoutHost, descriptionHost } = require('./service_hosts.js');

// For dev purposes
// const morgan = require('morgan');
// app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));
app.use('/:id', express.static(`${__dirname}/../public`));

app.post('/product-features', async (req, res) => {
  const { body: { table, record } } = req;
  const postData = {
    table: table,
    record: record,
  };

  try {
    const { data } = await axios.post(`${productFeaturesHost}/product-features`, postData);
    res.send(data);
  } catch(err) {
    res.status(500).send(err);
  }
});

app.get('/product-features/:id', async (req, res) => {
  const { params: { id } } = req;

  try {
    const { data } = await axios.get(`${productFeaturesHost}/product-features/${id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/product-features/:id', async (req, res) => {
  const { params: { id }, body: { table, updates } } = req;
  const updateData = {
    table: table,
    updates: updates,
  };

  try {
    const response = await axios.put(`${productFeaturesHost}/product-features/${id}`, updateData);
    res.send(response);
  } catch(err) {
    res.status(500).send(err);
  }
});

app.delete('/product-features/:id', async (req, res) => {
  const { params: { id }, body: { table } } = req;
  const deleteData = {
    table: table,
  };

  try {
    const response = await axios.delete(`${productFeaturesHost}/product-features/${id}`, deleteData);
    res.send(response);
  } catch(err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});