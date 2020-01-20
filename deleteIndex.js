
'use strict'
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

client.delete({  
  index: 'lendenbot',
  id: 1
},function(err,resp,status) {
    console.log(resp);
});