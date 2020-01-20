"use strict";
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
function run(param) {
  return new Promise(function(resolve, reject) {
    client.search(
      {
        index: "lendenbot",
        body: {
          query: {
            match: { question: param }
          }
        }
      },
      function(error, response, status) {
        if (error) {
          console.log("search error: " + error);
          reject(error);
        } else {
          response.body.hits.hits.forEach(function(hit) {
          });
          resolve(response.body.hits);
        }
      }
    );
  });
}
module.exports.run = run;
