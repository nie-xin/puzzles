/*
Chess board

Write a program that creates a string that represents an n×n grid, using newline
characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this (8x8):

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
function ChessBoard(height, width) {
  var height = height || 8;
  var width = width || 8;
  var chessboard = '';

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if (((i+j) % 2) === 0)
        chessboard += ' ';
      else
        chessboard += '#';
    }
    chessboard += '\n';
  }

  return chessboard;
}
