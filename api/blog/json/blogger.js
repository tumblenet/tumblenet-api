const getJSON = require('./getJson.js');

function getBloggerJson(url, callback) {
  var feedUrl = url + "/feeds/posts/default?alt=json";

  getJSON(feedUrl, function (json) {
    var blog = json.feed;

    var feed = {
      categories:[],
      tags: [],
      posts: []
    }

    //Sort Categories
    blog.category.forEach(function (categoryObj) {
      var category = categoryObj.term

      feed.categories.push(category);
    });

    //posts
    blog.entry.forEach(function (postObj) {
      var post = {
        title: postObj.title.$t,
        author: postObj.author[0].name.$t,
        category: postObj.category[0].term,
        tags: [],
        date: new Date(postObj.published.$t),
        url: postObj.link[postObj.link.length-1].href,
        content: postObj.content.$t
      }

      feed.posts.push(post);
    })

    //console.log(feed);
    callback(feed);
  });
}

module.exports = getBloggerJson;
