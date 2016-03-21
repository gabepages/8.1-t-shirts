var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');


var Tshirt  = Backbone.Model.extend({

});

var TshirtCollection = Backbone.Collection.extend({
  model: Tshirt

});


module.exports = TshirtCollection;
