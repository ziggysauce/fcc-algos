
function addTogether() {
  var check = function(value) {
    if (typeof value !== 'number') {
      return undefined;
    }
    else {
      return value;
    }
  };

  var sum = 0;

  if (arguments.length > 1) {
    for (var i=0; i<arguments.length; i++) {
      if (check(arguments[i])) {
        sum += (arguments[i]);
      }
      else {
        return undefined;
      }
    }
    return sum;
  }
  else {
    var hold = arguments[0];
    if (check(hold)) {
      return function(second) {
        if (check(second)) {
          return hold + second;
        }
        else {
          return undefined;
        }
      };
    }
  }
}

addTogether(2,3);
