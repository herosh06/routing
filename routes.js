const express = require('express');

const router = express.Router();


// example route to get the data
router.get('/test', (req,res,next) => {


    var request = require('request');

request({
  method: 'GET',
  url: 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62484ca9a81f01914b84a055472ac69ef6bc&start=8.6821,50.1109&end=8.5622,50.0379',
  headers: {
    'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  
})

module.exports = router;




