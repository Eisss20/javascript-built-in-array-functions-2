function isPalindrome(string) {
  // Start coding here
  const cleanString = string.replace(/[\W_]/g, "").toLowerCase();

  // เปรียบเทียบ string กับ string ที่ถูกกลับด้าน
  return cleanString === cleanString.split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
