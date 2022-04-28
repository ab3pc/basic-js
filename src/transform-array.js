const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
	if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
	let innerArr = [...arr]
	let res = [];
	arr.forEach((el,index) => {
		switch(true) {
			case el ==='--double-next' : {
				innerArr[index] = innerArr[index+1];
				//res.push(el)
				break;
			}
			case el ==='--double-prev' : {
				innerArr[index] = innerArr[index-1];
				//res.push(el)
				break;
			}
			case el ==='--discard-next' : {
				innerArr[index] = innerArr[index+1]='';
				//res.push(el)
				break;
			}
			case el ==='--discard-prev' : {
				innerArr[index] = innerArr[index-1]='';
				//res.push(el)
				break;
			}
			default: return;

		}
	})
	return innerArr.filter(w=> w)
  }

module.exports = {
  transform
};
