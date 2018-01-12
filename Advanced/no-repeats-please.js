function permAlone(str) {
  var fin = [];

  if (str.length === 1) {
    fin.push(str);
    console.log(fin.length);
    return fin.length;
  }

  getPermutation(str);

  function getPermutation(str) {
    var newArr = [];

    if (str.length === 1) {
      newArr.push(str);
      return newArr;
    }

    for (var i = 0; i < str.length; i++) {
      var first = str[i];
      var second = str.substring(0, i) + str.substring(i + 1);
      var temp = getPermutation(second);
      for (var j = 0; j < temp.length; j++) {
        newArr.push(first + temp[j]);
      }
    }

    fin = newArr;
    return newArr;
  }
  var remove = [];

  for (var k = 0; k < fin.length; k++) {
    for (var l = 0; l < fin.length; l++) {
      if (fin[k][l] === fin[k][l+1]) {
        remove.push(fin[k]);
      }
    }
  }

  // fin = fin.filter(x => remove.indexOf(x) === -1);

  var regex = /(.)\1+/g;

  var fin = fin.filter(function(string) {
   return !string.match(regex);
 });

  console.log(fin.length);
  return fin.length;
}

permAlone('aaabb');
