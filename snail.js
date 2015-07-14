var snail = function(array) {
  var dirs = ['right', 'bottom', 'left', 'top'];
  var visited = [];
  var curDir = 'right';
  var curPos = [0, 0];
  var arrayLength = getArrayLength(array);


  while (visited.length < arrayLength) {
    visited.push(getCell(curPos, array));

    var nextPos = movePos(curDir, curPos);
    var nextCell = getCell(nextPos, array);
    if (nextCell && (visited.indexOf(nextCell) < 0)) {
      curPos = nextPos;
    } else {
     curDir = dirs.filter(function(dir) {
       if (dir !== curDir) {
         nextPos = movePos(dir, curPos);
         nextCell = getCell(nextPos, array);
         return nextCell && (visited.indexOf(nextCell) < 0)
       }
     })[0];
     curPos = movePos(curDir, curPos);
    }

  }
  return visited;
};


var getCell = function(p, array) {
  if (array[p[0]])
    return array[p[0]][p[1]];
}

var movePos = function(dir, pos) {
  var nextPos = [];
  switch (dir) {
    case 'right': nextPos[0] = pos[0]; nextPos[1] = pos[1] + 1; break;
    case 'bottom': nextPos[0] = pos[0] + 1; nextPos[1] = pos[1]; break;
    case 'left': nextPos[0] = pos[0]; nextPos[1] = pos[1] - 1; break;
    case 'top': nextPos[0] = pos[0] - 1; nextPos[1] = pos[1]; break;
  }

  return nextPos;
}


var getArrayLength = function(array) {
  return array.reduce(function(total, row) {
    return total += row.length;
  }, 0);
}
