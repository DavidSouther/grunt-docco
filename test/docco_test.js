var grunt = require("grunt");
var rr =require("rimraf");

exports.docco = {
  main: function(test) {
     var expectSimple = "test";

     var css = grunt.file.read("docs/docco.css");
     var html = grunt.file.read("docs/docco.html");

     test.expect(2);
     test.equal(css.length, 7207, "Should create CSS.");
     test.equal(html.length, 1017, "Should create HTML.");
     test.done();

     rr('docs', function(){});
  }
};
