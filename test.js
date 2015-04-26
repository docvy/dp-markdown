/**
* Tests against the plugin
*/


"use strict";


// npm-installed modules
var should = require("should");


// module variables
var plugin = require("./index.js");
var metadata = require("./package.json");


describe("plugin API", function() {

  it("exposes required functions", function() {
    should(plugin.accepts).be.a.Function;
    should(plugin.produces).be.a.Function;
    should(plugin.run).be.a.Function;
  });

  it("exposes basic metadata", function() {
    should(metadata).be.ok;
    should(metadata.name).be.a.String;
    should(metadata.version).be.a.String;
    should(metadata.icon).be.a.String;
    should(metadata.description).be.a.String;
    should(metadata.homepage).be.a.String;
  });

});


describe("plugin.accepts", function() {

  it("returns an array", function() {
    should(plugin.accepts()).be.an.Array;
  });

});


describe("plugin.produces", function() {

  it("returns an array", function() {
    should(plugin.produces()).be.an.Array;
  });

});


describe("plugin.run", function() {

  it("converts markdown to html", function(done) {
    plugin.run("#hello markdown!", ["html"], function(err, contentType, pData) {
      should(err).not.be.ok;
      should(contentType).eql("html");
      should(pData).containEql("<h1 id=\"hellomarkdown\">hello markdown!</h1>");
      done();
    });
  });

});
