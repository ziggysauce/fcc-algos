
function smallestCommons(arr) {

  var large = Math.max(arr[0], arr[1]);
  var small = Math.min(arr[0], arr[1]);
  var fin = large;

  // Check for largest common multiple
  for (var j = large; j >= small; j--) {
    if (fin % j !== 0) {
      fin += large;
      j = large;
    }
  }

  //console.log(fin);
  return fin;

}


smallestCommons([1,13]);
