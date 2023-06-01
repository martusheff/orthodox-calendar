import DayData from './DayData';
import { calculateEasterFromYear } from './easter-helper';
import moment from 'moment';


export function getDayData(date) {
    const events = [];  // Placeholder, fetch actual events here
    const readings = "";  // Placeholder, fetch actual readings here
    const fastingInfo = "";  // Placeholder, fetch actual fasting info here
    const details = {};  // Placeholder, fetch actual details here
    const fastTitle = getFastingInfo(date); // Placeholder, featch actual details here
    const title = getTitle(date);

    // const daysFileURL = `./assets/days/days.json`
    // const saintsFileURL = `./assets/saints/saints.json`
    // const localDayData = require(daysFileURL)
    // const localSaintData = require(saintsFileURL)

    
    const saints = getSaintsByDayMonth(date.date(), date.month() + 1);

    
   



    return new DayData(date, events, readings, fastingInfo, details, title, fastTitle, saints);
}

export function getSaintsByDayMonth(day, month) {
    const daysFileURL = `./assets/days/days.json`;
    const localDayData = require(daysFileURL);
  
    const matchingDay = localDayData.find(
      (dayData) => dayData.day === day && dayData.month === month
    );
  
    if (matchingDay) {
        console.log("found matching day")
      const saintsFileURL = `./assets/saints/saints.json`;
      const localSaintData = require(saintsFileURL);
  
      const saintObjects = matchingDay.saints.map((saintId) =>
        localSaintData.find((saint) => saint.id === saintId)
      );
      console.log(saintObjects)
      return saintObjects;
    }
  
    return [];
  }

function getTitle(date) {


    const distanceToPascha = getDistanceToPascha(date);

    if (distanceToPascha === 0) {
        return 'Pascha';
    }

    if (distanceToPascha === -1) {
        return 'Thomas Sunday';
    }

    if (distanceToPascha === -2) {
        return 'Lazarus Saturday';
    }

    if (distanceToPascha === -7) {
        return 'Palm Sunday';
    }

    if (distanceToPascha === -8) {
        return 'Lent Begins';
    }

    if (distanceToPascha === -49) {
        return 'Cheesefare Sunday';
    }

    if (distanceToPascha === -50) {
        return 'Meatfare Sunday';
    }

    if (distanceToPascha === -51) {
        return 'Judgment Sunday';
    }

    if (distanceToPascha === -52) {
        return 'Prodigal Son Sunday';
    }

    if (distanceToPascha === -53) {
        return 'Publican & Pharisee Sunday';
    }

    if (distanceToPascha === -56) {
        return 'Three Hierarchs';
    }

    if (distanceToPascha === -57) {
        return 'Theophany';
    }

    // After Easter

    if (distanceToPascha === 1) {
        return 'Bright Monday';
    }

    if (distanceToPascha === 2) {
        return 'Bright Tuesday';
    }

    if (distanceToPascha === 39) {
        return 'Ascension of Christ';
    }

    if (distanceToPascha === 49) {
        return 'Pentecost';
    }

    if (distanceToPascha === 50) {
        return 'Monday of the Holy Spirit';
    }

    // Default title if no holiday is matched
    return '';
}

function isEaster(date) {
    const year = date.year();
    const easterDate = calculateEasterFromYear(year);
    return date.isSame(easterDate, 'day');
}

function getDistanceToPascha(date) {
    const year = date.year();
    const easterDate = calculateEasterFromYear(year);
    return date.diff(easterDate, 'days');
}

export default {
    getDayData,
    isEaster,
    getDistanceToPascha,
};

export function isApostlesFast(date) {
    const easterDate = moment(calculateEasterFromYear(date.year()));
    const apostlesFastStartDate = easterDate.clone().add(57, 'days');
    const apostlesFastEndDate = moment({ year: date.year(), month: 6, day: 12 });
  
    const isFast = date.isBetween(apostlesFastStartDate, apostlesFastEndDate, 'day', '[]');
  
    return isFast;
  }
  
  
  
  
function getFastingInfo(date) {
    if (!date) {
        return "";  // Return empty string if date is undefined
    }

    if (isApostlesFast(date)) {
        return "Apostle's Fast"
    }

    // Placeholder, add more fasting checks here for other fasts

    return "";  // Return empty string if no fasting information is found
}
