import DayData from "../models/DayData";
import { monthData } from "./OCMonthHelper";

export function getNewDayData(date) {
    const monthKey = `${date.month() + 1}_2024`;
    const localDayData = monthData[monthKey];
    return localDayData[`${date.month() + 1}/${date.date()}/2024`];
}

export function getDayData(date) {
    return new DayData(date);
}