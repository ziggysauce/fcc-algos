
function checkCashRegister(price, cash, cid) {
  var moneyArr = [100, 20, 10, 5, 1, .25, .1, .05, .01];

  var change = Math.round((cash - price)*100)/100;
  var storeReturn = [];
  var ofThisKind;
  var used = 0;
  // Here is your change, ma'am.
  console.log('change: ' + change);

  var total = 0;
  for (var i=0; i<cid.length; i++) {
    total += cid[i][1];
  }
  console.log('total CID: ' + (Math.round(total*100)/100));

  // There's enough CID
  if (total > change) {
    for (var j=0; j<moneyArr.length; j++) {
      console.log(moneyArr[j]);
      // If there's exact change return that
      if (Math.round(change*100)/100 >= moneyArr[j]) {
        console.log('there are ' + cid[8-j][1] / moneyArr[j] + ' ' + cid[8-j][0]);

        console.log(Math.round(change*100)/100);
        console.log("compared to " + cid[8-j][1]);

        ofThisKind = cid[8-j][1] / moneyArr[j];
        used = 0;

        while (Math.ceil(change*100)/100 - moneyArr[j] >= 0 && ofThisKind > 0) {
          change -= moneyArr[j];
          console.log(Math.ceil(change*100)/100 + ': latest change');
          ofThisKind--;
          used++;
        }

        var addThis = [cid[8-j][0], Number((used * moneyArr[j]).toFixed(2))];
        storeReturn.push(addThis);

        if (Math.ceil(change*100)/100 === 0) {
          return storeReturn;
        }

      } else {
        console.log('hit');
      }
    }

    return 'Insufficient Funds';
    // Else insufficient funds
  } else if (total === change) {
    console.log('closed');
    change = 'Closed';
  } else {
    console.log('insufficient funds');
    change = 'Insufficient Funds';
  }

  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
