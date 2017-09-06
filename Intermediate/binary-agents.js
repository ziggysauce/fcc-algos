
function binaryAgent(str) {

  // Separate each character
  var trythis = str.split(' ');

  // Convert each binary to unicode
  function convert (num) {
    num = String.fromCharCode(parseInt(num, 2));
    return num;
  }

  // Convert each unicode to letter/symbol
  str = trythis.map(convert).join("");
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
