
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  var newArr = [];


  for (var i=0; i< arr.length; i++) {
    var alt = arr[i].avgAlt;
    var first = (Math.pow((earthRadius + alt), 3))/GM;
    var second = Math.pow(first, 0.5);
    var third = second*2*(Math.PI);

    // newArr[i].name = arr[i].name;
    // newArr[i].orbitalPeriod = Math.round(third);

    newArr.push(
      { name: '' + arr[i].name + '', orbitalPeriod: Math.round(third)}
    );
  }


  console.log(newArr);
  return newArr;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);