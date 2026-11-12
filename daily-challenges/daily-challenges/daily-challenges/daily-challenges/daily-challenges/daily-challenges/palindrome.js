const isPalindrome = (str) => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("hello"));   // Expected: false