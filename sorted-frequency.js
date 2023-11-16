// ## **sortedFrequency**
// Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array
// **Constraints**:
// Time Complexity: O(log N)## **sortedFrequency**
// Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array
// **Constraints**:
// Time Complexity: O(log N)
function sortedFrequency(arr,num) {
let frequency = 0;
let leftIdx = 0;
let rightIdx = arr.length -1;

while (leftIdx <= rightIdx){

    let middleIdx = Math.floor((leftIdx+rightIdx)/2);
    // First occurrence 
    if (arr[middleIdx]===num){
        frequency++;

        leftIdx = middleIdx - 1;
        rightIdx = middleIdx + 1;

        // Count frequency from left
        while (arr[leftIdx] === num) {
            leftIdx--;
            frequency++;
        }

        // Count frequency from right
        while (arr[rightIdx] === num) {
            rightIdx++;
            frequency++;
        }
        return frequency;
    }
    // If middle element is greater than or equal to num, check left side of array
    else if (arr[middleIdx]>=num){
        rightIdx = middleIdx-1;
    }
    // If middle element is less than num, check right side of array
    else{
        leftIdx = middleIdx+1;
    }
}
// Return -1 if num is not found in array
return -1;
}

export default sortedFrequency