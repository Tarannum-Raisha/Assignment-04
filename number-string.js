function containsNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }
  
  // Example usage
  console.log(containsNumber("Hello World")); // Output: false
  console.log(containsNumber("Hello123")); // Output: true




  function containsNumber(str) {
    // Check if the string contains any digit between 0 and 9
    return /\d/.test(str);
  }
  
  // Example usage
  console.log(containsNumber("Hello World")); // Output: false
  console.log(containsNumber("Hello123")); // Output: true