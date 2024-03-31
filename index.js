function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers[complement]) return true;
    seenNumbers[num] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create  empty object to store numbers we've already looped through in array
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  check if any key  in our set equals this complement
  if it does, return true
  if not, add the current number to the object
  if we reach the end of the array return  false
*/

/*
  Add written explanation of your solution here
 We create an empty object called "seenNumbers" which will keep track of all the numbers we have encountered while iterating through
 we loop iterates through each number in the array
 For each number num, we calculate its complement by subtracting num from the target
 We check if the complement exists in the seenNumbers. If it does, it means we've found a pair of numbers whose sum equals the target. In this case, we return true
 If the complement does not exist in the seenNumbers, we add the current number num to the seenNumbers
 If the loop completes without finding a pair whose sum equals the target, we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
