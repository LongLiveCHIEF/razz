var domino = require("domino");
var React = require("react");
var ReactDOM = require("react-dom");

var razz = {};

razz.init = function(){
  global.window = domino.createWindow('<div id="test"></div>');
  global.document = global.window.document;
  global.navigator = {
    userAgent: "razz"
  };
};

razz.render = function(Component, props){
  var domEl = document.getElementById("test");
  var reactEl = ReactDOM.render(
    React.createElement(Component, props),
    domEl
  );
  return reactEl;
};

module.exports = razz;
