var NonJsxComponent = require("./non-jsx-component.js");
var razz = require("../index.js");
var Zepto = require("zepto-node");

describe("razz", function(){
  before(function(){
    razz.init();
    global.$ = Zepto(window);
  });

  it("provides a global window object", function(){
    expect(window).to.exist;
    expect(window.location).to.be.an("Object");
  });

  it("provides a global document object", function(){
    expect(document).to.exist;
    expect(document.querySelector).to.be.a("Function");
  });

  it("renders basic react components to the dom", function(){
    razz.render(NonJsxComponent);
    var el = $(".non-jsx");
    expect(el).to.have.$class("non-jsx");
  });
});
