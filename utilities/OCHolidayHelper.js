import { getDistanceToPascha } from './OCPaschaHelper'

export function getHolidayIcon(level) {
    switch(level) {
        case 1:
            return require('./../assets/images/cross1.png')
        case 2:
            return require('./../assets/images/cross2.png')
        case 3:
            return require('./../assets/images/cross3.png')
        default:
            return null
    }
}

export function getHolidayData(date) {
    const holidayKey = `${date.month() + 1}/${date.date()}`
    let holidayData = require('./../assets/data/holidays.json')
    let holiday = holidayData[holidayKey]
    return holiday ? holiday : []
}

export function getHoliday(date) {
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