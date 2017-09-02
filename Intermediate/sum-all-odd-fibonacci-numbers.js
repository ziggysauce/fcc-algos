function sumFibs(num) {

  var fib = 1; var next = 0; var temp;
  var fibarr = [1]; var final = []; var ending = 0;

  while (fib < num) {
    temp = fib;
    fib = fib + next;
    fibarr.push(fib);
    next = temp;
  }

  for (var i=0; i<fibarr.length; i++) {
    if (fibarr[i] % 2 !== 0) {
      final.push(fibarr[i]);
    }
  }

  final.pop();

  for (each in final) {
    ending += final[each];
  }

  console.log(fibarr);
  console.log(final);
  console.log(ending);
}

sumFibs(1000);
