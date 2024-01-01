export function getSaintData(date) {
    const saintKey = `${date.month() + 1}/${date.date()}`
    let saintData = require('./../assets/data/saints.json')
    let saints = saintData[saintKey]
    return saints ? saints : []
}

export function getSaintsByDayMonth(day, month) {
    const daysFileURL = `./../assets/days/days.json`;
    const localDayData = require(daysFileURL);
  
    const matchingDay = localDayData.find(
      (dayData) => dayData.day === day && dayData.month === month
    );
  
    if (matchingDay) {
      const saintsFileURL = `./../assets/saints/saints.json`;
      const localSaintData = require(saintsFileURL);
  
      const saintObjects = matchingDay.saints.map((saintId) =>
        localSaintData.find((saint) => saint.id === saintId)
      );
      return saintObjects;
    }
  
    return [];
  }