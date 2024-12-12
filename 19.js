function noSpace(str){
    const arr= str.split(" ");
     let newArray=[];
     for(let i=0; i< arr.length; i++){
       const trimmedstring= arr[i].trim();
       newArray.push(trimmedstring);
       
     }
      const final=newArray.join("");
     return final;
   }