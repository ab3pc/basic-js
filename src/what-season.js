const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  };
  try {
    date.toUTCString();
  } catch {
    throw Error("Invalid date!");
  };
  
  let res = date.getMonth();
  if (res >= 2 && res <= 4) {
    return "spring";
  }
  if (res >= 5 && res <= 7) {
    return "summer";
  }
  if (res >= 8 && res <= 10) {
    return "autumn";
  }
  if (res >= 11 || res <= 1) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
