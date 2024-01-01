export function isEaster(date) {
    const year = date.year();
    const easterDate = calculateEasterFromYear(year);
    return date.isSame(easterDate, 'day');
}

export function getDistanceToPascha(date) {
    const year = date.year();
    const easterDate = calculateEasterFromYear(year);
    return date.diff(easterDate, 'days');
}

export function calculateEasterFromYear(year) {

    let a = year % 19;
    let b = year % 4;
    let c = year % 7;
    let m = 15;
    let n = 6;
    let d = ((19 * a) + m) % 30;
    let e = (2 * b + 4 * c + 6 * d + n) % 7;

    if (d + e < 9) {
        let date = new Date(year, 3, d + e + 22 - 9);
        date.setDate(date.getDate() + 13);
        return date;
    } else {
        let date = new Date(year, 2, 22 + d + e);
        date.setDate(date.getDate() + 13);
        return date;
    }

}