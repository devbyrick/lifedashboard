export const Months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export function getMonthName(monthIndex: number, short: boolean = false): string {
    return short ? Months[monthIndex].substr(0, 3) : Months[monthIndex];
}

export function getTwoDigitNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}