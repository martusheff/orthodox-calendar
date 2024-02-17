import moment from "moment";
import { calculateEasterFromYear, getDistanceToPascha } from "./OCPaschaHelper";

export function isApostlesFast(date) {
    const easterDate = moment(calculateEasterFromYear(date.year()));
    const apostlesFastStartDate = easterDate.clone().add(57, 'days');
    const apostlesFastEndDate = moment({ year: date.year(), month: 6, day: 12 });
    const isFast = date.isBetween(apostlesFastStartDate, apostlesFastEndDate, 'day', '[]');
    return isFast;
}

export function isDormitionFast(date) {
    const dormitionStart = moment({ year: date.year(), month: 7, day: 14 });
    const dormitionEnd = moment({ year: date.year(), month: 7, day: 27 });
    const isFast = date.isBetween(dormitionStart, dormitionEnd, 'day', '[]');
    return isFast;
}

export function isNativityFast(date) {
    const nativityStart = moment({ year: date.year(), month: 10, day: 28 });
    const nativityEnd = moment({ year: date.year() + 1, month: 0, day: 7 });
    const isFast = date.isBetween(nativityStart, nativityEnd, 'day', '[]') ||
        date.date() < nativityEnd.date() && date.month() === 0;
    return isFast;
}

export function isCheesefare(date) {
    const cheesefareEnd = moment(calculateEasterFromYear(date.year())).add(-49, 'days');
    const cheesefareStart = cheesefareEnd.clone().add(-6, 'days')
    const isFast = date.isBetween(cheesefareStart, cheesefareEnd, 'day', '[]')
    return isFast
}

export function isGreatFast(date) {
    const greatFastEnd = moment(calculateEasterFromYear(date.year())).add(-1, 'days');
    const greatFastStart = greatFastEnd.clone().add(-49, 'days').startOf('isoWeek').add(1, 'weeks');


    const isFast = date.isBetween(greatFastStart, greatFastEnd, 'day', '[]')
    return isFast;
}

export function getFastingInfo(date) {
    if (!date) {
        return "";
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

    if (isCheesefare(date)) {
        return "Cheesefare"
    }

    return "";
}

export function getFastIcon(fl) {
    switch (fl) {
        case 0:
            return require('./../assets/images/blank.png')
        case 1:
            return require('./../assets/images/fish.png')
        case 2:
            return require('./../assets/images/olive-oil.png')
        case 3:
            return require('./../assets/images/no-oil.png')
        case 4:
            return require('./../assets/images/milk-eggs4.png')
        case 6:
            return require('./../assets/images/oil-after-church.png')
        case 7:
            return require('./../assets/images/fish-caviat.png')
        default:
            return require('./../assets/images/blank.png')
    }
}

export function getFastTitle(fl) {

    switch (fl) {
        case 1:
            return "Fish Allowed"
        case 2:
            return "Oil Allowed"
        case 3:
            return "No Oil"
        case 4:
            return "Milk & Eggs"
        case 6:
            return "Oil After Evening Services"
        case 7:
            return "Dried Fish"
        default:
            return "No Fast"
    }
}