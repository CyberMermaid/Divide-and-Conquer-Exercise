// ## **countZeroes**
// Given an array of 1s and 0s which has all 1s first followed by all 0s, 
// write a function called ***countZeroes***, which returns the number of zeroes
// in the array.
function countZeroes(arr) {
    // Left index is the beginning of the array
    let leftIdx = 0;
    // Right index is the end of the array
    let rightIdx = arr.length-1;
        while (leftIdx <= rightIdx)
        {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            if(arr[middleIdx] === 0){
                // Return # of zeros
                return arr.length-middleIdx;
            }
            // Search right half of array
            else if(arr[middleIdx]===1){
                leftIdx = middleIdx + 1
            }
        }
        return 0;
}

// module.exports = countZeroes
export default countZeroes