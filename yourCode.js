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
  lo = 0;
  hi = arr.length-1;

  if (val > arr[hi] || val < arr[lo]){
    return false;
  }

  if (arr.length === 1){
    mid = 0
  }
  else{
    mid = Math.floor(arr.length/2);
  }

  if (arr.length === 2){
  	if (val === arr[lo] || val === arr[hi]){
  		return true;
    }
	return false;
  }
  counter = 0;

  while (counter < 1000){    
    if (val === arr[mid]){
    return true;      
    }
    else if (val > arr[mid]){
    	if(val === arr[hi]){
    		return true;
    	}
        lo = mid;
        mid = lo+Math.floor((hi-lo)/2);

    }
    else if(val < arr[mid]){
      if(val === arr[lo]){
    		return true;
    	}
        hi = mid;
        mid = lo+Math.floor((hi-lo)/2);
    }
    else{
    	return false; 
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
