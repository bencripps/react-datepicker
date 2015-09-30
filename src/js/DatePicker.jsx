/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:09:55
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 17:24:14
*/

import React from 'react';
import Trigger from './components/Trigger.jsx';
import reactor from './reactor/Dispatcher.js';
import DEFAULT_PROPS from './components/config/defaultProps.js';

const DatePicker = React.createClass({

    propTypes: {
        dismissOnSelection: React.PropTypes.bool,
        startDate: React.PropTypes.func,
        triggerClassname: React.PropTypes.string,
        containerClassname: React.PropTypes.string
    },

    getDefaultProps() {
        return DEFAULT_PROPS
    },

    render() {
        return(
            <Trigger {...this.props} />
        );
    }

});

export default DatePicker;

