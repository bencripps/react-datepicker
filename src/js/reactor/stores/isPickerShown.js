/* 
* @Author: ben_cripps
* @Date:   2015-09-27 19:20:26
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-27 19:21:37
*/

import { Store, toImmutable } from 'nuclear-js';

const isPickerShownStore = Store({

    getInitialState() {
        return toImmutable(false);
    },

    initialize() {
        this.on('UPDATE_PICKER_VISIBILITY', (state, type) => type);
    }

});

export default isPickerShownStore;