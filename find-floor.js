// Function findFloor accepts a sorted array and
// a value x, and returns the floor of x in the array. 
// The floor of x in an array is the largest element in 
// the array which is smaller than or equal to x. 
// If the floor does not exist, return -1.
//https://www.geeksforgeeks.org/floor-in-a-sorted-array/
//https://stackoverflow.com/questions/68541621/floor-in-a-sorted-array

function findFloor(sortedArr, x) {
  let leftIdx = 0;
  let rightIdx = sortedArr.length -1;
  let floor = -1;

  while(leftIdx<=rightIdx){
    let middleIdx = Math.floor((leftIdx+rightIdx)/2);

    //If the middle element is greater than x, search left half of array
    if (sortedArr[middleIdx]>x){
        if (middleIdx != 0 && sortedArr[middleIdx - 1] < x) {
            return middleIdx;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    //If x is greater than the middle element, search right half of array
    else {
            floor = sortedArr[middleIdx];
            leftIdx = middleIdx + 1;
        }
    }
    return floor;
}
// module.exports = findFloor
export default findFloor