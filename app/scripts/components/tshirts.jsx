var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');


$.fn.serializeObject = function() {
 return this.serializeArray().reduce(function(acum, i) {
   acum[i.name] = i.value;
   return acum;
 }, {});
};

var Tshirts= React.createClass({
  render: function(){
    return (
      <div className="row">
        <SingleTshirt collection={this.props.collection}/>
      </div>
    );
  }
});


var SingleTshirt= React.createClass({
  handleClick: function(item, e){
    e.preventDefault();
    var quantity = $('#quantity').val();
    console.log(quantity);
    var size = $('#size').val();
    var cartItem= {
      'name': item.get('name'),
      'quantity': quantity,
      'size': size
    };
    localStorage.setItem('item', JSON.stringify(cartItem));
    console.log(localStorage.getItem('item'));
  },
  render: function(){
    var shirt = this.props.collection.map(function(item){
      var boundItem= this.handleClick.bind(this, item);
      return (
            <div key={item.get('cid')} className="col-sm-6 col-md-4 ">
              <div  className="thumbnail nail">
                <img id='pic' src={item.get('imageUrl')} alt="..." />
                <div className="caption">
                  <h3>{item.get('name')}</h3>
                  <p>{item.get('details')}</p>
                  <p>$ {item.get('price')}</p>
                  <form>
                    <input type="text" className="form-control" id="quantity"  placeholder="QTY" />
                  </form>
                  <select id='size'>
                    <option>S</option>
                    <option>M</option>
                    <option>LG</option>
                    <option>XL</option>
                  </select>
                  <a href="#" onClick={boundItem} className="btn btn-primary" role="button">Add To Cart</a>
                </div>
              </div>
            </div>

      );
    }.bind(this))
    return (
        <div>
          {shirt}
        </div>
    );
  }
});


module.exports = Tshirts;
