
function updateInventory(arr1, arr2) {
  var arr1items = [];
  var arr2items = [];

  arr1items = arr1.map(x => x[1]);
  arr2items = arr2.map(x => x[1]);
  console.log(arr1items.length);
  console.log(arr2items.length);

  var useLength = 0;
  if (arr1items.length >= arr2items.length) {
    useLength = arr1items.length;
  } else {
    useLength = arr2items.length;
  }

  // All inventory must be accounted for or you're fired!
  for (var i=0; i<arr1.length; i++) {
    for (var j=0; j<arr2.length; j++) {
      // if item matches, add it to arr1
      if (arr2[j][1] === arr1[i][1]) {
        arr1[i][0] += arr2[j][0];
      }
    }
  }

  console.log(arr1);

  for (var k=0; k<useLength; k++) {
    // if item from arr2 not in arr1, add it
    if (arr1items.indexOf(arr2items[k]) === - 1){
      if (arr2[k] === undefined) {
        arr1.sort(function(a,b) {
          return a[1].localeCompare(b[1]);
        });
        console.log(arr1);
        return arr1;
      }
      console.log('this is being added: ' + arr2[k]);
      arr1.push(arr2[k]);
      console.log('new arr: ' + arr1);
    }
  }
  arr1.sort(function(a,b) {
    return a[1].localeCompare(b[1]);
  });
  console.log(arr1);
  return arr1;
}

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
