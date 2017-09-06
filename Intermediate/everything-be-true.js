
function truthCheck(collection, pre) {
  //Is everyone being true?
  for (var i=0; i<collection.length; i++) {
    //console.log(collection[i][pre]);
    if (!collection[i][pre]){
      return false;
    }
  }
  return true;
}

truthCheck([{"single": ""}, {"single": "double"}], "single")
