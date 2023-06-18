export interface GetMonthDataOptions {
    year: number;
    monthIndex: number;

}

export interface MonthData {
    monthIndex: number;
    name: string;
    shortName: string;
    startWeekday: number;
    endWeekday: number;
    amountOfDays: number;
}

export interface MonthDataReturnObject {
    currentMonth: MonthData;
    previousMonth: MonthData;
    nextMonth: MonthData;
}