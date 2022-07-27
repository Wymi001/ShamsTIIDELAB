// const firstLine = '#  #  #  #';
// const secondLine = '#  #  #  #';
// const sizeOfBoard = 8;

// const chessBoard = function(size) {
//  for (let i = 1; i <= 8; i++) {
//   if (i % 2 === 0) {
//    console.log(secondLine);
//   }
//   else {
//    console.log(firstLine);
//   }
//  }
// }
// console.log(chessBoard());

VARIABLES
let col;
let row;

function chessBoard(size) {
 let spChar = '';  //declaring spChar an empty string
 // LOOPING OVER THE ROW
 for (let row = 1; row <= size; row++) {

  // IF ROW HAS A VALUE THAT IS EVEN
  if (row % 2 === 0) {
   spChar += ''; // empty string
  }
  // LOOPING OVER THE COLUMN
  for (let col = 1; col <= size; col++) {
   spChar += ' #';
  }
  spChar += '\n';
 }
 return spChar;
}

console.log(chessBoard(8));