const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options ) {
	const {repeatTimes=1, separator='+', addition='', additionRepeatTimes=1, additionSeparator='|'} = options;
	let res = []
	res.length=repeatTimes;
	let additionSeparatorPart = repeatTimes >= 1 ? additionSeparator:'';
	let additionPart = ''
	
	for(let i=1; i <= additionRepeatTimes; i++) {
		if(i >= 1 && i < additionRepeatTimes) additionPart +=`${addition}${additionSeparatorPart}`
		else additionPart +=`${addition}`
	} 

	let part = [`${str}`, additionPart].join('');
	
	return res.fill(part).join(separator)
  }

module.exports = {
  repeater
};
