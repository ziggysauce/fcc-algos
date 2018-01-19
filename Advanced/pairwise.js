function pairwise(arr, arg) {
  var sum = 0;
  var pair = arr.slice();

  for(i = 0; i < pair.length; i++) {
    for(j = i + 1; j < pair.length; j++) {
      if (pair[i] + pair[j] == arg) {
        sum += i + j;
        pair[i] = pair[j] = NaN;
      }
    }
  }
  return sum;
}