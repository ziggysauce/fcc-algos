
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (collection[id][prop] !== undefined) {
    if (value !== '') {
      var addThis = new Array();
      if (collection[id][prop].length > 1) {
        for (var i =0; i < collection[id][prop].length; i++) {
          addThis.push(collection[id][prop][i]);
        }
        addThis.push(value);
      } else {
        addThis.push(collection[id][prop], value);
      }
      collection[id][prop] = addThis;
    } else {
      delete collection[id][prop];
    }
  } else if (collection[id][prop] === undefined) {
    if (prop === "tracks") {
      var addKeys = prop;
      var addVals = [value];
      collection[id][addKeys] = addVals;
    }
    else {
      if (value !== "") {
        var addKey = prop;
        var addVal = value;
        collection[id][addKey] = addVal;
      }
    }
  }
  return collection;
}

// Alter values below to test your code
updateRecords(2468, "tracks", "Free");
