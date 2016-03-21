var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('Backbone');


//models and collection
var TshirtCollection = require('./models/tshirts');
var tshirtCollection = new TshirtCollection([
{
  imageUrl: 'images/trump.jpg',
  name: 'Shirt One',
  details: 'Very soft and nice shirt for the body. This shirt will give you awful hair and small hands.',
  price: 15
},
{
  imageUrl: 'images/clinton.jpg',
  name: 'Shirt two',
  details: 'Very warm and fits like a Juala bear. This shirt will help you hide a server in your colset.',
  price: 15
},
{
  imageUrl: 'images/sanders.jpg',
  name: 'Shirt three',
  details: 'Makes your arms look like tanks...also fits like a Juala bear. This shirt will make you a happy go lucky socialist.',
  price: 15
},
]);




//components
var Tshirts = require('./components/tshirts.jsx');
var ListItem = require('./components/list.jsx');


$('#cart-btn').on('click', function(){
  router.navigate('cart', {trigger: true});
});





var Router =Backbone.Router.extend({
  routes: {
    '': 'index',
    'cart': "cart"
  },
  index: function (){
    ReactDOM.render(
      <Tshirts collection={tshirtCollection} />,
      $('.container')[0]
    );
  },
  cart: function(){
    ReactDOM.render(
      <ListItem  />,
      $('.list')[0]
    );
  }
});


var router = new Router();

Backbone.history.start();
