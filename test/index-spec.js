var Greeting = require("./greeting.js");
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
    var el = $(razz.render(Greeting));
    expect(el).to.have.$text("Hello, world.");
  });

  it("renders components with props to the dom", function(){
    var el = $(razz.render(Greeting, {
      message: "G'day,",
      name: "mate"
    }));
    expect(el).to.have.$text("G'day, mate.")
  });
});
