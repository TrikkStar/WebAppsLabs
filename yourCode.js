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
	var tagCounts = new Object();

	if (items.length != 0){
		for (var i = items.length - 1; i >= 0; i--) {
			if (items[i].hasOwnProperty("tag")){
				if (items[i].tag.isArray()){
					for (var j = items[i].tag.length - 1; j >= 0; j--) {
						if (tagCounts.hasOwnProperty(items[i].tag[j])){
							tagCounts.items[i].tag[j] ++;
						}
						else{
							tagCounts.items[i].tag[j] = 1;
						}
					};
				}
			}
		};
	}
	return tagCounts;
};

/*
 * EXTRACT HASHTAGS
 */
var extractHashTags = function extractHashTags(str) {

};
