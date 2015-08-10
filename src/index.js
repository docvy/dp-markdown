/**
 * Converts markdown files
 * This plugin works for Docvy App v0.0.0
 */


"use strict";


exports = module.exports = {
    accepts,
    produces,
    run,
};


// npm-installed modules
const showdown = require("showdown");


// module variables
const converter = new showdown.Converter();


/**
 * Accepts Markdown
 *
 * Almost like Github: https://github.com/github/markup/blob/b865add2e053f8cea3d7f4d9dcba001bdfd78994/lib/github/markups.rb#L1
 */
function accepts() {
  return ["md", "mkdn", "mdown", "markdown", "mkd"];
}


/**
 * Produces Html (html)
 */
function produces() {
  return ["html"];
}


/**
 * Run the application
 *
 * @param <markdown> - {String} content as Markdown
 * @param <expects> - {Array} content-types that we should consider
 * @param <callback> - {Function} callback(err, contentType, html)
 */
function run(markdown, expects, callback) {
  if (expects[0] !== "html") { return callback(new Error()); }
  var html = converter.makeHtml(markdown);
  return callback(null, "html", html);
}
