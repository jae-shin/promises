

var promisifiedFunc = Promise.promisify(func);
// promisifiedFunc(p1, p2).then(function(results) {}).catch(function(err){});
// func(p1, p2, function(err, results) {
//  if (err) {
//    throw err
//  } else {
//    do sth with results;
//  }
// })

var callback = function(err, results) {

}

var promisify = function(func) {
  return function() {
    // apply func with passed in arguments and a callback function
    var boundFunc = func.bind(null, arguments);
    boundFunc(function(err, results) {
      if (err) {
        this.then()
      }
    });

    this.then = function(callback) {
      callback(results);
      // need to return a promise
    };
    this.catch = function(callback) {
      callback(err);
    };

    return this;
  };
};