
const axios = require('axios')
const fs = require('fs')

exports.get = async function (url) {
  return await axios(url)
}

exports.store = function (file, data) {
  fs.writeFileSync('./static/cache/' + file + '.json', JSON.stringify(data, null, 2))
}

exports.cache = function () {
  this.get('https://api.lever.co/v0/postings/oneconcern?mode=json')
    .then(result => this.store('lever', result.data))
}
