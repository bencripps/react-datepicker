/* 
* @Author: ben_cripps
* @Date:   2015-09-29 22:06:27
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-30 09:08:57
*/

import DateFormat from '../src/js/mixins/DateFormat.js';

const staticDate = 1443582772705;

describe('Date Format Mixin', () => {

    it('Should return the correct day based on index', () => {
        expect(DateFormat.getDayOfWeek(0)).toEqual('Sun');
        expect(DateFormat.getDayOfWeek(1)).toEqual('Mon');
        expect(DateFormat.getDayOfWeek(2)).toEqual('Tue');
        expect(DateFormat.getDayOfWeek(3)).toEqual('Wed');
        expect(DateFormat.getDayOfWeek(4)).toEqual('Thurs');
        expect(DateFormat.getDayOfWeek(5)).toEqual('Fri');
        expect(DateFormat.getDayOfWeek(6)).toEqual('Sat');
    });

    it('Should return correct data based on incoming date', () => {
        expect(DateFormat.getMonth(staticDate)).toEqual('September');
        expect(DateFormat.getYear(staticDate)).toEqual(2015);
    });

    it('Should return correct month object based on incoming date', () => {
        expect(DateFormat.getDaysFromDate(staticDate).length).toEqual(30);
    });

    it('Should return date of equal value', () => {
        expect(DateFormat.getDate(staticDate)).toEqual(new Date(staticDate));
    });

    it('Should decrement correctly', () => {
        expect(new Date(DateFormat.decrementMonth(staticDate)).getMonth()).toEqual(7);
    }); 

    it('Should advance correctly', () => {
        expect(new Date(DateFormat.advanceMonth(staticDate)).getMonth()).toEqual(9);
    });

});