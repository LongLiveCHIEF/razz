var React = require("react");

module.exports = React.createClass({
  render: function(){
    return React.createElement(
      'div',
      {className: "non-jsx"},
      "I do not use jsx."
    );
  }
});
