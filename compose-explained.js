// compose functions so that the next function takes previous
// functions's result as it's arguments
function compose ( /* funcs */ ) {
  var args = arguments;
  // start with last function
  var start = args.length - 1;

  return function () {
    var i = start;
    var result = args[start].apply(this, arguments);

    while (i--) {
      result = args[i].call(this, result);
    }

    return result;
  }
}
