

// index.js

function isPalindrome(str) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr = str.replace(/[^a-z]/g, '').toLowerCase();
  
  // Compare the original and reversed strings
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example test cases
console.log(isPalindrome("madam")); // Should return true
console.log(isPalindrome("robot")); // Should return false

// Additional test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Should return true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Should return true
console.log(isPalindrome("No lemon, no melon")); // Should return true
console.log(isPalindrome("Hello world")); // Should return false


/* 
  Add your pseudocode here
  function isPalindrome(str):
    // Remove spaces and special characters (assuming we only have lowercase letters)
    cleanStr = str.toLowerCase()

    // Initialize pointers for the first and last characters of the string
    start = 0
    end = length(cleanStr) - 1

    // Loop until the pointers meet in the middle
    while start < end:
        // If the characters at the pointers are not equal, it's not a palindrome
        if cleanStr[start] != cleanStr[end]:
            return false

        // Move the pointers towards each other
        start++
        end--

    // If the loop completes without returning, it's a palindrome
    return true

*/


/*
  Add written explanation of your solution here
  You are tasked with writing a function, isPalindrome, that takes a string as input. The function should return 'true' if the string is a palindrome (reads the same forwards and backwards), and 'false' otherwise. The input string will consist only of lowercase letters.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
