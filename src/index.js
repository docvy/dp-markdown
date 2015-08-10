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
const mime = require("mime");
const showdown = require("showdown");


// module variables
const converter = new showdown.Converter();


/**
 * Accepts Markdown
 */
function accepts() {
  return [mime.lookup("md")];
}


/**
 * Produces Html
 */
function produces() {
  return [mime.lookup("html")];
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
