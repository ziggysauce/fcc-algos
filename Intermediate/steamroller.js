
function steamrollArray(arr) {
  // I'm a steamroller, baby

  for (var i=0; i<arr.length; i++) {
    while (Array.isArray(arr[i]) == true){
      arr = [].concat.apply([], arr);
    }
  }


  console.log(arr);
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
