var expect = require("chai").expect;
var razz = require("./index.js");

describe("razz", function(){
  it("provides a global window object", function(){    
    expect(window).to.exist;
    expect(window.location).to.be.an("Object");
  });

  it("provides a global document object", function(){
    expect(document).to.exist;
    expect(document.querySelector).to.be.a("Function");
  });
});
