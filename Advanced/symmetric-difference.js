function sym(args) {
  let newestArr = [];

  for (var i=0; i < arguments.length; i++) {
    var newArr = arguments[i];

    console.log(newArr);

    var newerArr = newArr.filter(function(a,b) {
      return newArr.indexOf(a) == b;
    });

    console.log(newerArr);

    for (var j=0; j < newerArr.length; j++) {
      newestArr.push(newerArr[j]);
    }

    console.log(newestArr);

    var fin = newestArr.filter((multiple) => {
      return newestArr.indexOf(multiple) == newestArr.lastIndexOf(multiple);
    });

    console.log(fin);
    newestArr = fin;
    newArr = fin;
    console.log('reached');

  }
  console.log(fin);
  return fin;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
