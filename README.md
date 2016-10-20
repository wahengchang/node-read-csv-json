# read-csv-json

It is a module of reading CSV file and resolve JSON data as a promise.

[![NPM](https://nodei.co/npm/read-csv-json.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/read-csv-json)


## Install

```
$ npm install --save read-csv-json
```

## Usage

```js
var csvModule = require("read-csv-json")
```


## Usage

```js
## Usage

    var _filePath = './input.csv';
    var fieldsName = ['name', 'age', 'number'];

    var csvRead = new csvModule(_filePath, fieldsName);

    csvRead.getCSVJson().then(function(result){
      console.log('result: ', JSON.stringify(result));
    },function(err){
      console.log('err: ', err)
    });

    //  result of console.log
    // [{
    //     name: 'name1',
    //     age: 'age1',
    //     number: 'number1'
    // }, {
    //     name: 'name2',
    //     age: 'age2',
    //     number: 'number2'
    // }]

```


## License


[MIT](http://vjpr.mit-license.org)