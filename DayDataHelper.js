import DayData from './DayData';
import { calculateEasterFromYear } from './easter-helper';
import moment from 'moment';

// Preload all month data at the top of your file
const monthData = {
    "1_2024": require('./assets/data/1_2024.json'),
    "2_2024": require('./assets/data/2_2024.json'),
    "3_2024": require('./assets/data/3_2024.json'),
    "4_2024": require('./assets/data/4_2024.json'),
    "5_2024": require('./assets/data/5_2024.json'),
    "6_2024": require('./assets/data/6_2024.json'),
    "7_2024": require('./assets/data/7_2024.json'),
    "8_2024": require('./assets/data/8_2024.json'),
    "9_2024": require('./assets/data/9_2024.json'),
    "10_2024": require('./assets/data/10_2024.json'),
    "11_2024": require('./assets/data/11_2024.json'),
    "12_2024": require('./assets/data/12_2024.json'),
    // ... other months ...
};

export function getNewDayData(date) {
    const monthKey = `${date.month() + 1}_2024`;
    // console.log("ZAMBOO")
    // console.log(monthKey)
    const localDayData = monthData[monthKey]; // Access the preloaded data
    return localDayData[`${date.month() + 1}/${date.date()}/2024`]; // Adjust according to how your data is structured
}

export function getSaintData(date) {
    const saintKey = `${date.month() + 1}/${date.date()}`
    let saintData = require('./assets/data/saints.json')

    console.log(saintKey)
    let saints = saintData[saintKey]
    return saints ? saints : []
}

export function getHolidayData(date) {
    const holidayKey = `${date.month() + 1}/${date.date()}`
    let holidayData = require('./assets/data/holidays.json')
    let holiday = holidayData[holidayKey]
    return holiday ? holiday : {}
}

export function getDayData(date) {
    const events = [];  // Placeholder, fetch actual events here
    const readings = "";  // Placeholder, fetch actual readings here
    const details = {};  // Placeholder, fetch actual details here
    const fastTitle = getFastingInfo(date); // Placeholder, featch actual details here
    const title = "";
    const holiday = getHoliday(date);
    const fastLevel = 0;

    // const daysFileURL = `./assets/days/days.json`
    // const saintsFileURL = `./assets/saints/saints.json`
    // const localDayData = require(daysFileURL)
    // const localSaintData = require(saintsFileURL)

    
    const saints = getSaintsByDayMonth(date.date(), date.month() + 1);
    const staticHolidays = getStaticHolidaysByDayMonth(date.date(), date.month() + 1);

    const holidays = staticHolidays
    if (holiday != null) {
        holidays.push(holiday)
    }


   
//    console.log(holidays)



    return new DayData(date, events, readings, details, title, fastTitle, fastLevel, saints, holidays);
}

export function getSaintsByDayMonth(day, month) {
    const daysFileURL = `./assets/days/days.json`;
    const localDayData = require(daysFileURL);
  
    const matchingDay = localDayData.find(
      (dayData) => dayData.day === day && dayData.month === month
    );
  
    if (matchingDay) {
      const saintsFileURL = `./assets/saints/saints.json`;
      const localSaintData = require(saintsFileURL);
  
      const saintObjects = matchingDay.saints.map((saintId) =>
        localSaintData.find((saint) => saint.id === saintId)
      );
      return saintObjects;
    }
  
    return [];
  }

  export function getStaticHolidaysByDayMonth(day, month) {
    const daysFileURL = `./assets/days/days.json`;
    const localDayData = require(daysFileURL);
  
    const matchingDay = localDayData.find(
      (dayData) => dayData.day === day && dayData.month === month
    );
  
    if (matchingDay) {
      const holidaysFileURL = `./assets/holidays/holidays.json`;
      const localHolidaysData = require(holidaysFileURL);
  
      const holidayObjects = matchingDay.holidays.map((holidayId) =>
      localHolidaysData.find((holiday) => holiday.id === holidayId)
      );
    //   console.log(holidayObjects)
      return holidayObjects;
    }
  
    return [];
  }

  function getHoliday(date) {
    const distanceToPascha = getDistanceToPascha(date);
    
    if (distanceToPascha === 0) {
        return {
            id: 1,
            title: "Pascha",
            description: "Celebrates the resurrection of Jesus Christ from the dead."
        };
    }

    if (distanceToPascha === -1) {
        return {
            id: 2,
            title: "Thomas Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -2) {
        return {
            id: 3,
            title: "Lazarus Saturday",
            description: ""
        };
    }

    if (distanceToPascha === -7) {
        return {
            id: 4,
            title: "Palm Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -49) {
        return {
            id: 5,
            title: "Cheesefare Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -50) {
        return {
            id: 6,
            title: "Meatfare Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -51) {
        return {
            id: 7,
            title: "Judgment Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -52) {
        return {
            id: 8,
            title: "Prodigal Son Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -53) {
        return {
            id: 9,
            title: "Publican & Pharisee Sunday",
            description: ""
        };
    }

    if (distanceToPascha === -56) {
        return {
            id: 10,
            title: "Three Hierarchs",
            description: ""
        };
    }

    if (distanceToPascha === -57) {
        return {
            id: 11,
            title: "Theophany",
            description: ""
        };
    }

    // After Easter

    if (distanceToPascha === 1) {
        return {
            id: 12,
            title: "Bright Monday",
            description: ""
        };
    }

    if (distanceToPascha === 2) {
        return {
            id: 13,
            title: "Bright Tuesday",
            description: ""
        };
    }

    if (distanceToPascha === 39) {
        return {
            id: 14,
            title: "Ascension of Christ",
            description: ""
        };
    }

    if (distanceToPascha === 49) {
        return {
            id: 15,
            title: "Pentecost",
            description: ""
        };
    }

    if (distanceToPascha === 50) {
        return {
            id: 16,
            title: "Monday of the Holy Spirit",
            description: ""
        };
    }

    // No match found, return undefined or null
    return null;
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

  export function isDormitionFast(date) {
    const dormitionStart = moment({year: date.year(), month: 7, day: 14 });
    const dormitionEnd = moment({year: date.year(), month: 7, day: 27 });
    const isFast = date.isBetween(dormitionStart, dormitionEnd, 'day', '[]');
    return isFast;
  }

  export function isNativityFast(date) {
    const nativityStart = moment({year: date.year(), month: 10, day: 28 });
    const nativityEnd = moment({year: date.year() + 1, month: 0, day: 7 });
    const isFast = date.isBetween(nativityStart, nativityEnd, 'day', '[]') || 
        date.date() < nativityEnd.date() && date.month() === 0;
    return isFast;
  }

  export function isGreatFast(date) {
    const greatFastEnd = moment(calculateEasterFromYear(date.year())).add(-1, 'days');
    const greatFastStart = greatFastEnd.clone().add(-49, 'days').startOf('isoWeek').add(1, 'weeks');


    const isFast = date.isBetween(greatFastStart, greatFastEnd, 'day', '[]')
    return isFast;
  }
  
  
  
  
  
function getFastingInfo(date) {
    if (!date) {
        return "";  // Return empty string if date is undefined
    }

    if (isApostlesFast(date)) {
        return "Apostle's Fast"
    }

    if (isDormitionFast(date)) {
        return "Dormition Fast"
    }

    if (isNativityFast(date)) {
        return "Nativity Fast"
    }

    if (isGreatFast(date)) {
        return "Great Fast"
    }



    // Placeholder, add more fasting checks here for other fasts

    return "";  // Return empty string if no fasting information is found
}
