/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers*/
function evenOrOdd(number) {
    return number %2==0?'Even':'Odd';
   }
  console.log(evenOrOdd(5));
  //another solution
  function evenOrOdd(number) {
    if(number %2==0){return 'Even'}
    else{return 'Odd'}
   }
  console.log(evenOrOdd(29));
  //another solution
  let evenorodd=(num)=>num%2==0?`"Even"`:`"Odd"`;
console.log(evenorodd(10));
/* ***************************** */

