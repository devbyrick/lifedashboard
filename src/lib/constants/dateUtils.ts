import type {GetMonthDataOptions, MonthDataReturnObject} from "$lib/types/date-calendar";

export const Months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export const WeekDays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export function getMonthName(monthIndex: number, short = false): string {
    return short ? Months[monthIndex].substr(0, 3) : Months[monthIndex];
}

export function getTwoDigitNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function isLeapYear(year: number): boolean {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

function getAmountOfDaysPerMonth(year: number, monthIndex: number): number {
    switch (monthIndex) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeapYear(year) ? 29 : 28;
    }
    return 0;
}

export function getMonthData(options: GetMonthDataOptions): MonthDataReturnObject {
    const {year, monthIndex} = options;
    const previousMonthData = {
        index: monthIndex === 0 ? 11 : monthIndex - 1,
        year: monthIndex === 0 ? year - 1 : year
    }
    const nextMonthData = {
        index: monthIndex === 11 ? 0 : monthIndex + 1,
        year: monthIndex === 11 ? year + 1 : year
    }
    const currentMonth = {
        monthIndex,
        name: getMonthName(monthIndex, false),
        shortName: getMonthName(monthIndex, true),
        startWeekday: new Date(year, monthIndex, 1).getDay(),
        endWeekday: new Date(year, monthIndex + 1, 0).getDay(),
        amountOfDays: getAmountOfDaysPerMonth(year, monthIndex)
    };
    const previousMonth = {
        monthIndex: previousMonthData.index,
        name: getMonthName(previousMonthData.index, false),
        shortName: getMonthName(previousMonthData.index, true),
        startWeekday: new Date(previousMonthData.year, previousMonthData.index, 1).getDay(),
        endWeekday: new Date(previousMonthData.year, previousMonthData.index + 1, 0).getDay(),
        amountOfDays: getAmountOfDaysPerMonth(previousMonthData.year, previousMonthData.index)
    };
    const nextMonth = {
        monthIndex: nextMonthData.index,
        name: getMonthName(nextMonthData.index, false),
        shortName: getMonthName(nextMonthData.index, true),
        startWeekday: new Date(nextMonthData.year, nextMonthData.index, 1).getDay(),
        endWeekday: new Date(nextMonthData.year, nextMonthData.index + 1, 0).getDay(),
        amountOfDays: getAmountOfDaysPerMonth(nextMonthData.year, nextMonthData.index)
    };
    return {currentMonth, previousMonth, nextMonth};
}