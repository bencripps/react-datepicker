/* 
* @Author: ben_cripps
* @Date:   2015-09-27 20:06:46
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-10-01 20:38:22
*/

const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const Days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
];

const DateFormat = {

    getMonth(date) {
        var d = this.getDate(date);
        return Months[d.getMonth()];
    },

    getYear(date) {
        var d = this.getDate(date);
        return d.getFullYear();
    },

    getDaysFromDate(date) {
        var d = this.getDate(date);
        var numberOfDays = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
        var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
        var monthObj = DateFormat.buildMonthObject(numberOfDays, firstDay, d.getMonth(), d.getFullYear());

        return monthObj;
    },

    getDayOfWeek(index) {
        return Days[index];
    },

    buildMonthObject(numOfDays, startIndex, month, year) {
        var dayIndex = startIndex;
        var monthObj = Array.from(new Array(numOfDays), (x, i) => {
            dayIndex = dayIndex <= 6 ? dayIndex : 0;
            dayIndex++;
            return {
                date: i + 1,
                day: DateFormat.getDayOfWeek(dayIndex - 1),
                fullDate: new Date(year, month, i + 1)
            };
        });

        return monthObj;
    },

    advanceMonth(date) {
        var d = this.getDate(date);
        return new Date(d).setMonth(d.getMonth() + 1);
    },

    decrementMonth(date) {
        var d = this.getDate(date);
        return new Date(d).setMonth(d.getMonth() - 1);
    },

    getDateFromDay(date, dayIndex) {
        var d = this.getDate(date);
        return d.setDate(dayIndex);
    },

    isSameDate(oldDate, currentDate) {
        return String(oldDate) === String(currentDate);
    },

    getDate(date) {
        return new Date(date);
    }
   
};

export default DateFormat;