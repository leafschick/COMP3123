
/* 

// Question 1: Capitalize the first letter of each word
function capitalizeLetter(str) {
  // Split the string into words
  return str
    .split(" ")
    // Capitalize the first letter of each word and keep the rest
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    // Join the words back into a single sentence
    .join(" "); 
}

// Input string
let text = "the five boxing wizards jump quickly";
// Call the function
let result = capitalizeLetter(text);
// Print the result
console.log("Q1:", result); 
// Output: The Five Boxing Wizards Jump Quickly


// Question 2: Move last three characters to the start
function right(str) {
  // Check if the string has at least 3 characters
  if (str.length >= 3) {
    // Get the last 3 characters
    let lastThree = str.slice(-3);   
    // Get the rest of the string except the last 3 characters
    let rest = str.slice(0, -3);    
    // Put the last 3 characters at the front and return the result
    return lastThree + rest;   
  } else {
    // If string is shorter than 3 characters, return it as is
    return str; 
  }
}

// Test cases
console.log("Q2:", right("Apple"));        // pleAp
console.log("Q2:", right("WizerdPlace"));  // aceWizerdPl
console.log("Q2:", right("Cat"));          // Cat


// Question 3: Largest of three integers
function max(x, y, z) {
  // Variable to hold the largest number
  let biggest;

  // Compare x and y first
  if (x >= y) {
    // If x is also greater than or equal to z, x is biggest
    if (x >= z) {
      biggest = x;
    } else {
      // Otherwise z is bigger
      biggest = z;
    }
  } else {
    // If y is greater than x, compare y with z
    if (y >= z) {
      biggest = y;
    } else {
      // Otherwise z is bigger
      biggest = z;
    }
  }

  // Return the largest value
  return biggest;
}
// Test cases
console.log("Q3:", max(98, 99, 100));   // 100
console.log("Q3:", max(-8, 20, -10));   // 20
console.log("Q3:", max(-72, -69, -65)); // -65

*/  
//Question 4: Maximum sum of n consecutive numbers
function array_total_amount(arr, n) {
  // If n is bigger than the array length, return null
  if (n > arr.length) return null;

  // Get the sum of the first n numbers
  let total_amount = 0;
  for (let c = 0; c < n; c++) {
    total_amount += arr[c];
  }

  // Store the current sum
  let current_total = total_amount;

  // Slide through the array and update the sum
  for (let c = n; c < arr.length; c++) {
    // Subtract the element going out and add the new element
    current_total = current_total - arr[c - n] + arr[c];
    // Update the maximum if current sum is bigger
    if (current_total > total_amount) {
      total_amount = current_total;
    }
  }
  // Return the maximum sum found
  return total_amount;
}
// Test cases
console.log("Q4:", array_total_amount([9, 4, 9, 10, 6], 2));     // 19
console.log("Q4:", array_total_amount([-9, 6, 2, 18, 17], 4));  // 43
console.log("Q4:", array_total_amount([10, 10], 2));  // 20
