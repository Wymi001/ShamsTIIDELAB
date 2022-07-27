// LOOP THROUGH NUMBERS 1 TO 200
for (let number = 1; number <= 200; number++) {

// DECLARE VARIABLES FOR NUMBERS DIVISIBLE BY 6 AND 8 
 var numDivSix = number % 6;
 var numDivEight = number % 8;

 // NUMBERS DIVISIBLE BY BOTH 6 AND 8 
 if ((numDivSix == 0) && (numDivEight == 0)) {
  console.log('ShamsTIIDELAB');
 }

 // NUMBERS DIVISIBLE BY 6 ONLY 
 else if (numDivSix == 0) {
  console.log('Shams');
 }

 // NUMBERS DIVISIBLE BY 6 ONLY 
 else if (numDivEight == 0) {
  console.log('TIIDELAB');
 }

 // NUMBERS NOT DIVISIBLE BY NEITHER 6 NOR 8
 else {
  console.log(number);
 }
}