var fs = require("fs");
var browserify = require("browserify");

var babelConfig = require('./babel.config');
console.log(babelConfig)
browserify("./src/render-demo1.jsx")
  .transform("babelify", babelConfig)
  .bundle()
  .pipe(fs.createWriteStream("lib/bundle.js"));