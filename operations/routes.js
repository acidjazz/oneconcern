'use strict'

require('dotenv').config()
const contentful = require('contentful')
const slug = require('speakingurl')
const fs = require('fs')

exports.store = function (results) {

  let routes = []
  for (let entry of results.items) {
    if (entry.fields.type !== 'link') {
      console.log(`gen: /blog/${slug(entry.fields.title)}-${entry.sys.id}`)
      routes.push(`/blog/${slug(entry.fields.title)}-${entry.sys.id}`)
      //routes.push(`/jp/blog/one-concern-${entry.sys.id}`)
    }
  }
  // routes.push('/error')

  fs.writeFileSync('./static/cache/routes.json', JSON.stringify(routes, null, 2))

}

exports.cache = function () {

  const config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  }

  const client = contentful.createClient(config)
  client.getEntries({'content_type': 'blog'}).then(results => this.store(results))

}
