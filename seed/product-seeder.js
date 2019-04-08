var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});

var products = [
  new Product({
    imagePath: 'images/hp1.jpg',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    description: 'The exciting start of the legendary Harry Potter saga',
    price: 10
  }),
  new Product({
    imagePath: 'images/hp2.jpg',
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'Book 2!',
    price: 10
  }),
  new Product({
    imagePath: 'images/hp3.jpg',
    title: 'Harry Potter and the Prisoner of Azkaban',
    description: 'Book 3!',
    price: 10
  }),
  new Product({
    imagePath: 'images/hp4.jpg',
    title: 'Harry Potter and the Goblet of Fire',
    description: 'Book 4!',
    price: 10
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, results) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
