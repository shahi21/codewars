var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
   
    if(humanYears===1){
      return [humanYears ,15,15];
    }
    if(humanYears===2){
      return [humanYears ,24,24];
    }
    const excessyears= humanYears-2;
    const extracatyears= excessyears*4;
    const extradogyears= excessyears * 5;
    
    return [humanYears ,24 + extracatyears,24+extradogyears];
  }