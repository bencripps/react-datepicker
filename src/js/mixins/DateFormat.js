/* 
* @Author: ben_cripps
* @Date:   2015-09-27 20:06:46
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-27 20:22:09
*/

const Months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

const DateFormat = {

    getMonth(date) {
        var d = this.getDate(date);
        return Months[d.getMonth()];
    },

    getDate(date) {
        return new Date(date);
    }
   
};

export default DateFormat;