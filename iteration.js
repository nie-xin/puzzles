function ArraySeq(list) {
  this.list = list;
  this.count = 0;
}
ArraySeq.prototype.getNext = function() {
  return this.list[this.count++];
};

// function RangeSeq(from, to) {
//   this.current = from;
//   this.to = to;
//   this.count = 0;
// }
// RangeSeq.prototype.getNext = function() {
//   if (this.current <= this.to) {
//     this.current += this.count;
//     this.count += 1;
//     return this.current;
//   }
//   return undefined;
// };

// inheritance approche
function RangeSeq(from, to) {
  this.list = [];
  this.count = 0;
  for (var i = from; i <= to; i++)
    this.list.push(i);
}
RangeSeq.prototype = Object.create(ArraySeq.prototype);

function logFive(collection) {
  while (collection.count < 5)
    console.log(collection.getNext());
}



function logFive(collection) {
  while (collection.count < 5)
    console.log(collection.getNext());
}

//logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
