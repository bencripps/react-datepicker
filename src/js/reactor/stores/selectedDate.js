/* 
* @Author: ben_cripps
* @Date:   2015-09-27 19:26:39
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-27 20:03:17
*/


import { Store, toImmutable } from 'nuclear-js';

const selectedDateStore = Store({

    getInitialState() {
        var date = new Date().toDateString();
        return toImmutable(date);
    },

    initialize() {
        this.on('UPDATE_SELECTED_DATE', (state, type) => type);
    }

});

export default selectedDateStore;