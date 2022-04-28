const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr ) {
	let indexOfOne = []
	for(let i=0; i < arr.length; i++) {
		 if(arr[i] === -1) {
		indexOfOne.push(i)
		 //console.log(arr[i])
		 //res.splice(i,-1)
	 }
 }
 let res = arr.sort((a,b)=> a-b).filter(w => w>=0);

for(let index of indexOfOne) {
	res.splice(index,0,-1)
}
return res
}

module.exports = {
  sortByHeight
};
