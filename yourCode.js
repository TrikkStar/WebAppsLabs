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

  while (hi-lo !== 1){     
    if (val === arr[mid]){
    	return true;      
    }
    else if (val > arr[mid]){
		if(val > arr[hi]){
	    	return false;
		}
        lo = mid;
        mid = lo + Math.floor((hi-lo)/2);
    }
    else if(val < arr[mid]){
		if(val < arr[lo]){
	    	return false;
		}
        hi = mid;
        mid = lo + Math.floor((hi-lo)/2);
    }
    else{
    	return false; 
    }
    /*counter ++;
    if(counter>=1000){
		console.log("exceeded counter");
		break;  
    }*/
  }
  if ((val === arr[hi]) || (val === arr[lo])){
  	return true;
  }
  return false;
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
