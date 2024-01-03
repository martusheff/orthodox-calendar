import { monthData } from "./OCMonthHelper";

export function getDayData(date) {
    const monthKey = `${date.month() + 1}_2024`;
    const localDayData = monthData[monthKey];
    return localDayData[`${date.month() + 1}/${date.date()}/2024`];
}