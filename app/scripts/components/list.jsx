var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = React.createClass({
  handleClick: function(item){
    localStorage.removeItem('item')
  },
  render: function(){
    var shirt = _.map(localStorage.getItem('item'), function(item){
      var boundItem = this.handleClick.bind(this, item);
      return(
        <tr>
          <td>{item.get('name')}</td>
          <td>QTY</td>
          <td>time</td>
          <td>
            <button type="button" onClick={boundItem} className="btn btn-danger">Danger</button>
          </td>
        </tr>
      );
    }.bind(this))
    return(
      <div>
        {shirt}
      </div>
    );
  }
});


module.exports = ListItem;
