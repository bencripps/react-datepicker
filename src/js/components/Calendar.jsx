/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Styles from './Styles';
import StyleBuilder from '../mixins/StyleBuilder.js';
import DateFormat from '../mixins/DateFormat.js';
import Day from './Day.jsx';

const Calendar = React.createClass({

    mixins: [StyleBuilder, DateFormat],

    getDefaultProps() {
        return {
            calendarContainerStyle: {
                border: Styles.CALENDAR.CONTAINER.BORDER,
                height: Styles.CALENDAR.CONTAINER.HEIGHT,
                width: Styles.CALENDAR.CONTAINER.WIDTH,
                margin: Styles.CALENDAR.CONTAINER.MARGIN,
                marginTop: Styles.CALENDAR.CONTAINER.MARGIN_TOP,
                textAlign: Styles.CALENDAR.CONTAINER.TEXT_ALIGN
            }
        };
    },

    getDays() {
        return this.getDaysFromDate(this.props.currentDate).map((day) => <Day data={day} currentDate={this.props.currentDate} dismissOnSelection={this.props.dismissOnSelection} />);
    },

    render() {
        return (
            <div style={this.buildStyles('calendarContainerStyle')}>
                {this.getDays()}
            </div>
        );
    }
});

export default Calendar;