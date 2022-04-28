const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let chars = [...str];
	let count = 1;
	let res = ''
	for(let i=0; i<chars.length;i++) {
		if(chars[i] === chars[i+1]) {
			count++;
			
		} else {
			res += count ===1 ? `${chars[i]}` :`${count}${chars[i]}`
			count = 1;
		}
	}
	return res
	  }

module.exports = {
  encodeLine
};
