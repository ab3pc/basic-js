const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
	let res = []
	let num = [...n.toString()];
	for(let i = 0; i< num.length;i++) {
		let innerArr = [...num];
		innerArr[i]='';
		res.push(Number(innerArr.filter(w=> w!=='').join('')))
		
	}
	return Math.max(...res)
}

module.exports = {
  deleteDigit
};
