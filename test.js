var should = require('should');

var csvModule = require('./index.js');

var _filePath = './input.csv';


var fieldsName = ['name', 'age', 'number'];


describe('Test read-csv-json module', function() {

  it('       read-csv-json.getCSVJson function', function(done) {
    var csv = new csvModule(_filePath, fieldsName);
    csv.getCSVJson().then(function(result){
      console.log('result: ', JSON.stringify(result));
      done();
    },function(err){
      console.log('err: ', err)
      done(err);
    });
  });

});
