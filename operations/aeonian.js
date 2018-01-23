require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: '1c-'
  },
  environments: {
    production: 'CLOUDFRONTID',
    staging: 'CLOUDFRONTID',
    dev: 'CLOUDFRONTID',
  }
}).deploy(process.argv[2])
