function removeDups(str){
  let char
  const charCount = {} 
  const newStr = [];
  // Count the instances of each character in an object
  for(let i =0; i< str.length; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  // Iterate through the object, and grab the letters that have ony appeared once.
  for (let c in charCount){
    if (charCount[c] === 1)
       newStr.push(c);
  }
  return newStr.join('');
}

console.log(removeDups("we all live in a yellow submarine")) //vyosubmr
console.log(removeDups("call me maybe")) //cyb
console.log(removeDups("wait till i get my money right")) //waonrh