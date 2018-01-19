
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];

  for (var i=0; i< arr.length; i++) {
    var fin = Math.pow(((Math.pow((earthRadius + arr[i].avgAlt), 3))/GM), 0.5)*2*(Math.PI);

    newArr.push(
      { name: '' + arr[i].name + '', orbitalPeriod: Math.round(fin)}
    );
  }

  console.log(newArr);
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);