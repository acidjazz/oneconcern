require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: '1c-'
  },
  environments: {
    production: 'E26T22R6AY0TYO',
    staging: 'E1C7VZR7WZRWBN',
    development: 'CLOUDFRONTID',
  }
}).deploy(process.argv[2])
