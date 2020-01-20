'use strict'
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

client.count({index: 'lendenbot'},function(err,resp,status) {  
  console.log("info: ",resp);
});