const request = require('request');

function getJSON(url, callback) {
  //var url = "https://www.tumblenet.ga/feed/categories.json";

  request({
    url: url,
    json: true,
    followAllRedirects: true
  }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
      //console.log(body) // Print the json response
      callback(body, response.location);
    }
  });
}

module.exports = getJSON;
