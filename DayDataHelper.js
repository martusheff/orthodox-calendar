import DayData from './DayData';
import { calculateEasterFromYear } from './easter-helper';

export function getDayData(date) {
  // Generate the data for the specified date
  const events = [];  // Placeholder, fetch actual events here
  const readings = "";  // Placeholder, fetch actual readings here
  const fastingInfo = "";  // Placeholder, fetch actual fasting info here
  const details = {};  // Placeholder, fetch actual details here


  const title = isEaster(date) ? 'Easter' : "";



  return new DayData(date, events, readings, fastingInfo, details, title);
}

function isEaster(date) {
  const year = date.year();
  const easterDate = calculateEasterFromYear(year);

  // Returns true if the given date is the same as Easter date
  return date.isSame(easterDate, 'day');
}

