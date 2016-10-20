
var CsvToArray = require ("csv-to-array");

var csvModule = function (_readDir, _fieldsName) {

  this.readDir = _readDir;
  this.fieldsName = _fieldsName;

};

csvModule.prototype.getCSVJson = function () {

    var _readDir =  this.readDir;
    var _fieldsName = this.fieldsName;
  return new Promise(function(resolve, reject) {

    CsvToArray ({
      file:  _readDir,
      columns: _fieldsName
    }, function (err, response) {
      if(err){
        reject(err);
      } else {
        resolve(response);
      }
    });
  });

};


module.exports = csvModule;
