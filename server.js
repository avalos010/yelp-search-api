const express = require('express');
const yelp = require('yelp-fusion');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3002;

let app = express(); 
app.use(cors());
app.use(bodyParser());

const apiKey = 'mWvFHI5rCbnhr2HOObXZxW0m-RcqZauFeUu3lmjhFj7CiX2PXn_OmQLLGDW75upserV8LFyjcCd5yeJWQcEsc3lXBQkMh15Vi2N2KffrMGeGyuB6pxap4GwXDK9vWnYx';
const client = yelp.client(apiKey);
app.get('/', (req,res) => {
res.send('Web Server Started Sucessfully!');
});

app.post('/query', (req, res) => {
    req.body ? client.search({
        term: req.body.term,
        location: req.body.location
      }).then(response => {
          console.log(response.jsonBody);
        res.json(response.jsonBody.businesses);
        res.send(true);
      }).catch(e => {
        console.log(e);
      }) : console.log('Something went wrong try again')
});


app.listen(port, () => {
    console.log(`Server up and on running on ${port}`)
});