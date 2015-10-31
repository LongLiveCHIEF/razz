var React = require("react");

module.exports = React.createClass({
  render: function(){
    var message = this.props.message || "Hello,";
    var name = this.props.name || "world";
    var greeting = message + " " + name + ".";
    return React.createElement(
      'div',
      {className: "greeting"},
      greeting
    );
  }
});
