var isLetter = function(a){
	if((a>=65 && a<=90)||(a>=97 && a<=122)) return true
	else return false
}

function LetterCapitalize(str) { 
  	var newString = ""
    
	for(i=0;i<str.length;i++){
      var ascii = str.charCodeAt(i);
      var check = str.charCodeAt(i-1);
      if(isLetter(check)==false){
        ascii = ascii+32;
        var newLetter = String.fromCharCode(ascii);
        console.log(newLetter);
        newString = newString + newLetter}
      else newString+=str.charAt(i);
    }
        
        
        
  // code goes here  
  return newString; 
         
}