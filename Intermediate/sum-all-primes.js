function sumPrimes(num) {
  var arr = []; var total = 0;

  // Check if number is prime
  function primenum(value) {
    for (var i=2; i<value; i++) {
      if (value % i === 0 && value !== i) {
        return false;
      }
    }
    return true;
  }

  // Create array of prime numbers
  for (var j=2; j<=num; j++) {
    if (primenum(j)) {
      arr.push(j);
    }
  }

  // Sum prime numbers
  for (var k=0; k<arr.length; k++) {
    total += arr[k];
  }

  return total;
}

sumPrimes(10)
