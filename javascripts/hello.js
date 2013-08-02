var page = require("webpage").create();
var fs = require("fs");
var homePage = "http://www.google.com/";
page.open(homePage);
page.onLoadFinished = function(status) {
  var file = fs.open("output.htm", "w");
  file.write(page.content);
  file.close();
  phantom.exit();
};