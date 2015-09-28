/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:16:46
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:39:47
*/

import React from 'react';
import DatePicker from '../../src/js/DatePicker.jsx';

let options = {
    dismissOnClose: false
}

document.addEventListener('DOMContentLoaded', function() {
    React.render(<DatePicker {...options} />, document.getElementById('datepicker-mount'));
});