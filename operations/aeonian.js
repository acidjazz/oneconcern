require('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: '1c-'
  },
  environments: {

    /* - official 1c id's
    production: 'E1Z577RFAY2GSN',
    staging: 'E1OCUBYNGDRQHE',
    development: 'CLOUDFRONTID',
    */

    // - dev id's
    production: 'E26T22R6AY0TYO',
    staging: 'E1C7VZR7WZRWBN',

  }
}).deploy(process.argv[2])
