import { yearData } from './OCYearHelper';

export const monthData = {
    "1_2024": require('./../assets/data/1_2024.json'),
    "2_2024": require('./../assets/data/2_2024.json'),
    "3_2024": require('./../assets/data/3_2024.json'),
    "4_2024": require('./../assets/data/4_2024.json'),
    "5_2024": require('./../assets/data/5_2024.json'),
    "6_2024": require('./../assets/data/6_2024.json'),
    "7_2024": require('./../assets/data/7_2024.json'),
    "8_2024": require('./../assets/data/8_2024.json'),
    "9_2024": require('./../assets/data/9_2024.json'),
    "10_2024": require('./../assets/data/10_2024.json'),
    "11_2024": require('./../assets/data/11_2024.json'),
    "12_2024": require('./../assets/data/12_2024.json'),
};

export function getMonthData(date) {
    let yearKey = `${date.year()}`
    let year = yearData[yearKey]
    let month = year[`${date.month() + 1}`]
    return month ? month : {}
}