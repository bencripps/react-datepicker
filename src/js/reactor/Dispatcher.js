/* 
* @Author: ben_cripps
* @Date:   2015-09-27 13:47:14
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-30 10:39:23
*/

import { Reactor } from 'nuclear-js';
import isPickerShownStore from './stores/isPickerShown.js';
import currentDateStore from './stores/currentDate.js';
import selectedDateStore from './stores/selectedDate.js';

const reactor = new Reactor({ debug: true });

reactor.registerStores({
    isPickerShown: isPickerShownStore,
    currentDate: currentDateStore,
    selectedDate: selectedDateStore
});

export default reactor;