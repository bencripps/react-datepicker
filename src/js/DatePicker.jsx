/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:09:55
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 17:24:14
*/

import React from 'react';
import Trigger from './components/Trigger.jsx';
import reactor from './reactor/Dispatcher.js';

const DISMISS_ON_CLOSE = true;
const PREFIX = 'react-datepicker-';
const TRIGGER_CLASSNAME = PREFIX + 'trigger';
const CONTAINER_CLASSNAME = PREFIX + 'container';

const DatePicker = React.createClass({

    propTypes: {
        dismissOnClose: React.PropTypes.bool,
        startDate: React.PropTypes.func,
        triggerClassname: React.PropTypes.string,
        containerClassname: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            dismissOnClose: DISMISS_ON_CLOSE,
            triggerClassname: TRIGGER_CLASSNAME,
            containerClassname: CONTAINER_CLASSNAME
        };
    },

    render() {
        return(
            <Trigger {...this.props} />
        );
    }

});

export default DatePicker;

