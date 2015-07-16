function ThirdGreatest(strArr) { 
	var holder = [strArr[0]];
  	var flipit = 0;
  	for(i=1;i<strArr.length;i++){
      var lengthCheck = strArr[i];
      
      for(j=0;j<holder.length;j++){
        var holderCheck = holder[j]
        if(lengthCheck.length<=holderCheck.length){
          holder.splice(j,0,lengthCheck)
          flipit = 1;}
      }
      
      if(flipit ==0) {
        holder.push(strArr[i])};
      
      flipit == 0;
    }
  
      	
  
  // code goes here  
  var index = holder.length-3;
  return holder[index]; 
}