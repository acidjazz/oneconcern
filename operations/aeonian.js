require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: '1c-'
  },
  environments: {
    production: 'CLOUDFRONTID',
    staging: 'E1C7VZR7WZRWBN',
    development: 'CLOUDFRONTID',
  }
}).deploy(process.argv[2])
