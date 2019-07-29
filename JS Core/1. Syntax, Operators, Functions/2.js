function greatestCommonDivisor(firstNumber, secondNumber){
   let GCD = 0;
      for (let i = 1; i <= Math.min(firstNumber,secondNumber); i++) {

         if((firstNumber % i === 0) && (secondNumber % i === 0)){
            GCD = i;
         }
         
      }
   console.log(GCD);
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)