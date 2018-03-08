const extend = require('extend');

const getBlogger = require('./json/blogger.js');
const getJekyll = require('./json/jekyll.js');

function getBlogs() {

  getJekyll("http://www.tumblenet.ga", function (feed) {
    var tnBlog = JSON.stringify(feed);
    getBlogger("http://tumblegamer.blog.tumblenet.ga", function (feed) {
      var tgBlog = JSON.stringify(feed);
      getBlogger("http://doctorbatmanwho.blog.tumblenet.ga", function (feed) {
        var dbwBlog = JSON.stringify(feed);

        var test = extend(true, tnBlog, tgBlog, dbwBlog);
        console.log(test);
    });
  });
}

module.exports = getBlogs;
