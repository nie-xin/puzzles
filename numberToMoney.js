// TODO: so ugly, needs refacto
// http://www.codewars.com/kata/54ad586282bc65b7ec000182/train/javascript
var numberToMoney = function(n) {
  val = n.toString().split('.');
  
  var decimalPart = val[1].substr(0, 2);
  if ( (+decimalPart)%10 === 0 ) {
    decimalPart = decimalPart.substr(0, decimalPart.length-1);
  }
  
  var integerPart = val[0].split('');
  for (var i = integerPart.length -3; i > 0; i -= 3) {
    integerPart.splice(i, 0, ',');
  }
  integerPart = integerPart.join(''); 
  
  
  return integerPart + '.' + decimalPart;
};

// best solution
function numberToMoney(n) {
  return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// truncate: Math.floor(n * 100) / 100)
// rounding: n.toFixed(2)