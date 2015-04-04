/**
* Converts markdown files
* This plugin works for Docvy App v0.0.0
*/


"use strict";


// npm-installed modules
var Showdown = require('showdown');


// module variables
var converter = new Showdown.converter();


/**
* Accepts Markdown (md)
*/
exports.accepts = function() {
  return ["md"];
};


/**
* Produces Html (html)
*/
exports.produces = function() {
  return ["html"];
};


/**
* Run the application
*
* @param <markdown> - {String} content as Markdown
* @param <expects> - {Array} content-types that we should consider
* @param <callback> - {Function} callback(err, contentType, html)
*/
exports.run = function(markdown, expects, callback) {
  if (expects[0] !== "html") { return callback(new Error()); }
  var html = converter.makeHtml(markdown);
  return callback(null, "html", html);
};

