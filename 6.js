function getCount(str) {
    let Count=0;
    const arr= str.split("");
    for(let i=0; i<arr.length; i++){
      switch(arr[i]){
          case 'a':
          Count++;
          break;
          case 'e':
          Count++;
          break;
          case 'i':
          Count++;
          break;
          case 'o':
          Count++;
          break;
          case 'u':
          Count++;
          
      }
    }
      return Count;
  }
  