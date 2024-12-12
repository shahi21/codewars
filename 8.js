function isDivisible(n, x, y) {
    const result1= n/x;
    const result2 =n/y;
    if(result1 %1 === 0 && result2 % 1 ===0){
      return true;
    } else{
      return false;
    }
  }