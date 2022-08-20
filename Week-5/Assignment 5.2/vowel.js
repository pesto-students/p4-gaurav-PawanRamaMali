function isVowelRegEx(char) {
  if (char.length == 1) {
    return /[aeiou]/.test(char);
  }
}

function vowelCount(str){
 let map = new Map();
  for(let char of str){
    if(isVowelRegEx(char)){
      map.set(char,(map.get(char) || 0)+1);
    }
    
 }  
 return map;
}

console.log(vowelCount('abcdefaaaaae'))