function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
     const count= marks.length;
    let sum=0;
     for(let i=0; i< count; i++){
       sum+=marks[i];
       
     }
    const avg= sum/count;
    const roundeddown= Math.floor(avg);
    
    return roundeddown;
    
    }