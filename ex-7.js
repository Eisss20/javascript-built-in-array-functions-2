function isPalindrome(string) {
  return string.split('').reverse().join('') === string
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false