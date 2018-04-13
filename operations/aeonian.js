require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: '1c-'
  },
  environments: {
    production: 'E1Z577RFAY2GSN',
    staging: 'E1OCUBYNGDRQHE',
    development: 'CLOUDFRONTID',
  }
}).deploy(process.argv[2])
