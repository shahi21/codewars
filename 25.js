function points(games) {
    let totalpoints=0;
    for(let i=0; i<games.length;i++){
      const value= games[i];
      const parts= value.split(":");
      
      const x= parts[0];
      const y= parts[1];
      
      if(x>y){
        totalpoints+=3;
        
      }else if(x==y){
        totalpoints+=1;
        
      }
    }
    return totalpoints;
  }