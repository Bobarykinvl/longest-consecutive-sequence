module.exports = function longestConsecutiveLength(array) {
		var maxRez = 1;
//		var arrEmp = [];
		var arrLength = array.length;
		array.sort(function(a,b){
			return a-b;
		})
		
		var count = 1;
		
		if(arrLength == 0){
			return 0;
			
		} else if(arrLength == 1){
			return 1;
		} else if (arrLength > 1){
			
			for(var i = 0; i < arrLength;i++){
				if(array[i]+1 === array[i+1]){
					count++;
					
				}
				if(array[i] === array[i+1]){
					continue;
				}
				if(array[i]+1 !== array[i+1]){
					if(count > maxRez){
						maxRez = count;
					}
//					arrEmp.push(count);
					count = 1;
				}
			}	
		}
		
		console.log(maxRez);
		return maxRez;
}
