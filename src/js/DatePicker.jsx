/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:09:55
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 17:24:14
*/

import React from 'react';
import Trigger from './components/Trigger.jsx';
import reactor from './reactor/Dispatcher.js';

const DISMISS_ON_SELECTION = true;
const PREFIX = 'react-datepicker-';
const TRIGGER_CLASSNAME = PREFIX + 'trigger';
const CONTAINER_CLASSNAME = PREFIX + 'container';
const AFTER_SELECTION = (date) => {};

const DatePicker = React.createClass({

    propTypes: {
        dismissOnSelection: React.PropTypes.bool,
        startDate: React.PropTypes.func,
        triggerClassname: React.PropTypes.string,
        containerClassname: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            dismissOnSelection: DISMISS_ON_SELECTION,
            triggerClassname: TRIGGER_CLASSNAME,
            containerClassname: CONTAINER_CLASSNAME,
            afterSelection: AFTER_SELECTION
        };
    },

    render() {
        return(
            <Trigger {...this.props} />
        );
    }

});

export default DatePicker;

