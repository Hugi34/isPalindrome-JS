/**
 * This function checks if the given phrase is a palindrome.
 * @param {*} str The phrase given.
 * @returns True if phrase is palindrome.
 */
function isPalindrome(str){
  let reverseStr = ""
  for(let i = str.length-1; i >= 0; i--)
    reverseStr += str[i]
  

 return str===reverseStr
}

/*
I used this line of code which was correct, but can use the used code to be better
    if(str === reverseStr)
    return true
    else 
    return false
    */