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

function chessBoard(size) {
 let specChar = '';  //declaring specChar an empty string
 // LOOPING OVER THE ROW
 for (let row = 1; row <= size; row++) {

   specChar += ''; // empty string

  // LOOPING OVER THE COLUMN
  for (let col = 1; col <= size; col++) {

   specChar += '  #';

  }

  specChar += '\n';

 }

 return specChar;
}

console.log(chessBoard(8));