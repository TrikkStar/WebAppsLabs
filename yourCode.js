/*
 * Name 1: Noah Thederahn
 * Name 2: Shelby Babcock
 */

/*
 * BINARY SEARCH
 */
var binarySearch = function binarySearch(arr, val) {
  var lo, hi, mid, counter;

  if (arr.length === 0){
    return false;
  }
  lo = arr[0];
  hi = arr[arr.length-1];

  if (val > hi || val < lo){
    return false;
  }

  if (arr.length === 1){
    mid = arr[0]
  }
  else{
    mid = arr[Math.floor(arr.lengh/2)];
  }
    if (arr.length ===2){
	if (val===lo){
	    return true;
	}
	if (val===hi){
	    return true;
	}
	else{
	    return false;
	}
    }
  counter = 0;

  while (counter < 1000) {     // You should change this with a proper condition
      // You will need to add things here
    if (val === mid){
    return true;      
    }
    else if (val > mid && val === hi){
        return true;
      }
    else if(val < mid && val === lo){
      return true; 
    }
    counter ++; 
  }

   // You may need to add things here

};

/*
 * COUNTING TAGS
 */
var countTags = function countTags(items) {
   // Declare your local variables here. One was done for you.
   var tagCounts;

   // Add your code here


   return tagCounts;
};

/*
 * EXTRACT HASHTAGS
 */
var extractHashTags = function extractHashTags(str) {

};
