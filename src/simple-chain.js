const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

	res: [],
	getLength() {
		return this.res.length
	},
	addLink(value) {
		let val = String(value);
		this.res.push(`( ${val} )`);
		return this
	},
	removeLink(position) {
    if(position-1 < 0 || position >= this.res.length ||
      typeof position !=='number') {
        throw new Error('You can\'t remove incorrect link!')
      }
		this.res = this.res.filter((_,i)=> i !== position-1);
		return this
	},
	reverseChain() {
		this.res.reverse();
		return this
	},
	finishChain() {
		return this.res.join('~~')
	}
  };

module.exports = {
  chainMaker
};
