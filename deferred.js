/** 
Description:

One of the most beautiful things about JavaScript is that it is asynchronous. And usually callbacks just work fine, but deferred objects allow to write asynchronous JavaScript parallel to how we write synchronous code and makes it more readable.

A deferred is an object representing work that is not yet done and a promise is an object representing a value that is not yet known.

Your task to create a Deferred class which should have the following parameters

    promise :- the promise object. More details below
    resolve(data) :- calls all the success handlers with the data
    reject(data) :- calls all the failure handlers with the data

Notice that once the deferred is complete ( resolve/reject is called once) then calling resolve or reject again should give an error

The promise object has three functions :-

    then(successHandler,errorHandler) :- Adds both the success and error Handlers. Error handler is optional
    success(successHandler) :- Adds a success handler
    failure(errorHandler):- Adds a error handler 

Following is an example how your class will be used :-

  var deferred = new Deferred();
  var promise = deferred.promise;
  promise.success(function() {
    console.log("Success Handler Called");
  });
  promise.failure(function() {
   console.log("Failure Handler Called");
  });

  deferred.resolve("Success"); // this will console.log "Success Handler Called"
*/

function Deferred() {
  this.promise = {
    complete: false,
    then: function(successHandler, errorHandler) {
      this.successHandler = successHandler;
      this.errorHandler = errorHandler;
      this.callbacks = [].slice.call(arguments, 2);
    },
    success: function(successHandler) {
      this.successHandler = successHandler;
      this.callbacks = [].slice.call(arguments, 1);
    },
    failure: function(errorHandler) {
      this.errorHandler = errorHandler;
      this.callbacks = [].slice.call(arguments, 1);
    }
  };
  
  this.resolve = function(data) {
    if (this.promise.complete) throw new Error('Deferred is completed');
    this.promise.successHandler(data);
    if (this.promise.callbacks.length)
      this.promise.callbacks.forEach(function(cb) { cb(data); });
    this.promise.complete = true;
  };
  
  this.reject = function(data) {
    if (this.promise.complete) throw new Error('Deferred is completed');
    this.promise.errorHandler(data);
    if (this.promise.callbacks.length)
      this.promise.callbacks.forEach(function(cb) { cb(data); });
    this.promise.complete = true;
  };
  
  return this;
}

// Good solution
function Deferred() {
  var success = [];
  var failure = [];
  
  this.promise = {
    success: Array.prototype.push.bind(success),
    failure: Array.prototype.push.bind(failure),
    then: function(s, f) {
      success.push(s);
      f && failure.push(f);
    }
  };
  
  this.resolve = handle.bind(this, success);
  
  this.reject = handle.bind(this, failure);
  
  function handle(handlers, data) {
    this.resolve = this.reject = function() { z };
    handlers.forEach(function(callback) {
      callback(data);
    });
  };
}