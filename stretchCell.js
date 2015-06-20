// TextCell Number Number -> TextCell
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  var innerWidth = this.inner.minWidth();
  return this.width > innerWidth ? this.width : innerWidth;
};
StretchCell.prototype.minHeight = function() {
  var innerHeight = this.inner.minHeight();
  return this.height > innerHeight ? this.height : innerHeight;
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
