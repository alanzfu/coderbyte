var mergeSort = function(array){
	
	if (array.length<2) return array

	split left and right with splice down the middle

	return merge(mergeSort(left), mergeSort(right))
}

var merge = function(left, right){
	var result=[];

	while the left and right have length
		compare them and push-shift them to result 

	if there is leftover from either left or right, push-shift them onto result
		result.push(left/right.shift());


}