// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  let copy = arr.slice();  // just copy
  let sorted = [];         // target

  while (copy.length > 0) { // check all elements
    console.log(sorted.join(','));

    let el0 = copy.pop()    // extract 1 el from source
    sorted.push(null)       // will use for shift right

    let i = sorted.length - 2; //last ignoring null
    let el = sorted[i];
    while(el >= el0 && i >= 0) { // left/last checking in target      
      sorted[i+1] = sorted[i]; // shift checked to right
      i--;                      // next
      el = sorted[i];           // left element       
    }    
    sorted[i+1] = el0; // correcting last i change after while 
  }
 //console.log(sorted);
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let pointer = 0; // like a length of left part; == first unsorted  
  while (pointer < arr.length) {//while the unsorted half is not empty
  

    let el0 = arr[pointer] // first from unsorted
    let breakPoint = 0;
    for (let i = pointer; i >= 0; i--) {// for each from divider
      let left = arr[i-1];
      if (left < el0) { // insertion point
        breakPoint = i;        
        break;
      } else { // shift value to the right
        arr[i] = left; // and continue
      }
    }
    arr[breakPoint] = el0 // insering at brake point or 0 index;
    console.log(arr.join(','));
    pointer++
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];