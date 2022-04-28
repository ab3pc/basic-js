const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(dom) {
	let res = {};
	for (let item of dom) {
		let domains = item.split('.');
		
		for(let i=0; i < domains.length; i++) {
			let elem = domains.slice(i).reverse().join('.')
			if(res[`.${elem}`]) {
				res[`.${elem}`]++
			} else {
				res[`.${elem}`] = 1;
			}

		}
	}
	return res
  }

module.exports = {
  getDNSStats
};
