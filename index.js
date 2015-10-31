var domino = require("domino");

global.window = domino.createWindow('<div id="test"></div>');
global.document = global.window.document;
global.navigator = {
  userAgent: "razz"
};
