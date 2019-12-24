/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var mongoose    = require('mongoose')

const CONNECTION_STRING = process.env.DB; //
MongoClient.connect(CONNECTION_STRING, function(err, db) {
  const Schema = mongoose.Schema
  var stockSchema =  new Schema({
    stock:  {
      type: String
    },
    price: {
      type: Number
    },
    likes: {
      type: Boolean
    }
  })

  
  
});

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      let stockData = {'stock': req.params.stock, 'price': req.params.price, 'likes': req.params.likes.length}
      res.json(stockData)
    });
    
};
