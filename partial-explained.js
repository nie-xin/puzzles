/*
 * JavaScript has a bind method that could applied as partial application, but
 * bind restricts passing parameters in order
 * The following implementation gives the flexibility to chose combination of argument to bind,
 * for example partial(testFunc, 'hello', _, 'yeah')
 * The code sample inspired from Programming JavaScript(Manning 2016) and lodash
 * I add annotation to help me understand this implementation
 */
function partial () {
  var func = this;
  // slice from 1 as position 0 is the function to partial application
  var boundArgs = Array.prototype.slice.call(arguments, 1);
  // the placeholder allows chose parameters to partially bind
  var placeholder = _;

  // the partially bound function that returned after call to partial function
  // this function will be executed with other parameters filled
  var bound = function () {
    // the counter for arguments passed to partial applied function
    // the argument passed are those left after calling partial
    var position = 0;
    var length = boundArgs.length;
    // the final arguments that will be pass to func
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      // the most important part of function
      // if partial applied argument is placeholder, take the argument of bound function,
      // if not a placeholder, take the argument of partial applied function
      args[i] = boundArgs[i] === placeholder ?
        arguments[position++] :
        boundArgs[i];
    }

    // if any argument of bound function left, add to final argument list
    while (position < arguments.length) {
      args.push(arguments[position++]);
    }

    // call applied function with final argument list
    return func.apply(this, args);
  }

  // return bound function after calling partial function
  return bound;
}
