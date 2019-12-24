/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://djisu:Timbuk2tudjesu@cluster0-nlxec.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true, 
  useUnifiedTopology: true 
}); 

//var mongoose    = require('mongoose').MongoClient
const CONNECTION_STRING = process.env.DB

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

 //

  
  
});

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function (req, res){
      let stockData = {'stock': req.params.stock, 'price': req.params.price, 'likes': req.params.likes.length}
      res.json(stockData)
    });
  
  app.post('/api/stock-prices', (req, res) => {
    let varStock = req.params.stock
    let varPrice = req.params.price
    let varLikes = req.params.likes
    
    const Stock = mongoose.model("Stock", stockSchema); 
      var stock = new Stock({
        stock: req.params.stock,
        price: req.params.price,
        likes: req.params.likes
      })
     stock.save(function(err, data) {
        if (err){
          res.json({'message': err.toString()})
        } else {
          res.json({'stock': varStock, 'price': varPrice, 'likes': varLikes})
        }
      })

  })
    
};
