var matchArray = str.match(/\d{1,}/g);
  	var sum = 0;
  	for (i=0;i<matchArray.length;i++){
      matchArray[i] = parseInt(matchArray[i],10);
      sum = sum+matchArray[i];
    }
  
  // code goes here  
  return sum; 
         
}