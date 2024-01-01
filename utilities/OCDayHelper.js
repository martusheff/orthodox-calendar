import DayData from "../models/DayData";
import { getFastingInfo } from "./OCFastHelper";
import { getHoliday, getStaticHolidaysByDayMonth } from "./OCHolidayHelper";
import { monthData } from "./OCMonthHelper";
import { getSaintsByDayMonth } from "./OCSaintHelper";

export function getNewDayData(date) {
    const monthKey = `${date.month() + 1}_2024`;
    const localDayData = monthData[monthKey];
    return localDayData[`${date.month() + 1}/${date.date()}/2024`];
}

export function getDayData(date) {
    const events = [];
    const readings = "";
    const details = {};
    const fastTitle = getFastingInfo(date);
    const title = "";
    const holiday = getHoliday(date);
    const fastLevel = 0;
    
    const saints = getSaintsByDayMonth(date.date(), date.month() + 1);
    const staticHolidays = getStaticHolidaysByDayMonth(date.date(), date.month() + 1);

    const holidays = staticHolidays
    if (holiday != null) {
        holidays.push(holiday)
    }

    return new DayData(date, events, readings, details, title, fastTitle, fastLevel, saints, holidays);
}