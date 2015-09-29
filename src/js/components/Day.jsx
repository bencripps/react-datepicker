/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import reactor from '../reactor/Dispatcher.js';
import Styles from './Styles';
import DateFormat from '../mixins/DateFormat.js';
import StyleBuilder from '../mixins/StyleBuilder.js';
import selectedDateGetter from '../reactor/getters/selectedDate.js';

const Day = React.createClass({

    mixins: [StyleBuilder, DateFormat],

    getDataBindings() {
        return {
            selectedDate: selectedDateGetter
        };
    },

    getDefaultProps() {
        return {
            containerStyle: {
                fontFamily: Styles.GENERAL.FONT_FAMILY,
                display: Styles.DAY.CONTAINER.DISPLAY,
                width: Styles.DAY.CONTAINER.WIDTH,
                height: Styles.DAY.CONTAINER.HEIGHT,
                border: Styles.DAY.CONTAINER.BORDER,
                margin: Styles.DAY.CONTAINER.MARGIN,
                verticalAlign: Styles.DAY.CONTAINER.VERTICAL_ALIGN,
                position: Styles.DAY.CONTAINER.POSITION,
                textAlign: Styles.DAY.CONTAINER.TEXT_ALIGN,
            },
            dateStyle: {
                fontFamily: Styles.GENERAL.FONT_FAMILY,
                position: Styles.DAY.TITLE.POSITION,
                fontSize: Styles.DAY.DATE_TITLE.FONT_SIZE,
                top: Styles.DAY.DATE_TITLE.TOP,
                left: Styles.DAY.DATE_TITLE.LEFT
            },
            dayStyle: {
                fontFamily: Styles.GENERAL.FONT_FAMILY,
                fontSize: Styles.DAY.DAY_TITLE.FONT_SIZE
            }
        };
    },

    handleClick(date, e) {
        var newDate = this.getDateFromDay(this.props.currentDate, date);
        reactor.dispatch('UPDATE_SELECTED_DATE', newDate);
    },

    render() {
        return (  
            <div style={this.buildStyles('containerStyle')} 
                onClick={this.handleClick.bind(this, this.props.data.date)}>
                <h4 style={this.buildStyles('dateStyle')}>{this.props.data.date}</h4>
                <h5 style={this.buildStyles('dayStyle')}>{this.props.data.day}</h5>
            </div>
        );
    }
});

export default Day;