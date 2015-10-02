/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Radium from 'radium';
import Styles from './Styles';
import DateFormat from '../mixins/DateFormat.js';
import Day from './Day.jsx';

const Calendar = React.createClass({

    mixins: [DateFormat],

    getDefaultProps() {
        return {
            calendarContainerStyle: {
                height: Styles.CALENDAR.CONTAINER.HEIGHT,
                width: Styles.CALENDAR.CONTAINER.WIDTH,
                margin: Styles.CALENDAR.CONTAINER.MARGIN,
                marginTop: Styles.CALENDAR.CONTAINER.MARGIN_TOP,
                textAlign: Styles.CALENDAR.CONTAINER.TEXT_ALIGN
            }
        };
    },

    getDays() {
        return this.getDaysFromDate(this.props.currentDate).map((day) => <Day data={day} {...this.props} />);
    },

    render() {
        return (
            <div style={[this.props.calendarContainerStyle]}>
                {this.getDays()}
            </div>
        );
    }
});

export default Radium(Calendar);