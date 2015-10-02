/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Radium from 'radium';
import reactor from '../reactor/Dispatcher.js';
import Styles from './Styles';
import DateFormat from '../mixins/DateFormat.js';
import selectedDateGetter from '../reactor/getters/selectedDate.js';
import isPickerShownGetter from '../reactor/getters/isPickerShown.js';

const Day = React.createClass({

    mixins: [DateFormat],

    getDataBindings() {
        return {
            selectedDate: selectedDateGetter,
            isPickerShown: isPickerShownGetter
        };
    },

    getDefaultProps() {
        return {
            dayContainerStyle: {
                fontFamily: Styles.GENERAL.FONT_FAMILY,
                display: Styles.DAY.CONTAINER.DISPLAY,
                width: Styles.DAY.CONTAINER.WIDTH,
                height: Styles.DAY.CONTAINER.HEIGHT,
                border: Styles.DAY.CONTAINER.BORDER,
                margin: Styles.DAY.CONTAINER.MARGIN,
                verticalAlign: Styles.DAY.CONTAINER.VERTICAL_ALIGN,
                position: Styles.DAY.CONTAINER.POSITION,
                textAlign: Styles.DAY.CONTAINER.TEXT_ALIGN,
                transform: Styles.DAY.CONTAINER.TRANSFORM,
                transitionTimingFunction: Styles.GENERAL.TRANSITION_TIMING_FUNCTION,
                transitionDuration: Styles.GENERAL.TRANSITION_DURATION,
                transitionProperty: Styles.DAY.CONTAINER.TRANSITION_PROPERTY,
                ':hover': {
                    transform: Styles.DAY.CONTAINER.HOVER_TRANSFORM
                }
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
            },
            activeStyle: {
                backgroundColor: Styles.DAY.ACTIVE_STYLE.BACKGROUND_COLOR,
            }
        };
    },

    handleClick(date, e) {
        var newDate = this.getDateFromDay(this.props.currentDate, date);
        reactor.dispatch('UPDATE_SELECTED_DATE', newDate);

        if (this.props.afterSelection) {
            this.props.afterSelection(new Date(newDate));
        }

        if (this.props.dismissOnSelection) {
            reactor.dispatch('UPDATE_PICKER_VISIBILITY', false);
        }

    },

    isActiveDate(dateObj, currentDate) {
        return this.isSameDate(dateObj.fullDate, new Date(currentDate));
    },

    render() {
        
        var activeStyles = this.isActiveDate(this.props.data, this.props.selectedDate) ? this.props.activeStyle : [];

        return (  
            <div style={[this.props.dayContainerStyle, activeStyles]} 
                onClick={this.handleClick.bind(this, this.props.data.date)}>
                <h4 style={[this.props.dateStyle]}>{this.props.data.date}</h4>
                <h5 style={[this.props.dayStyle]}>{this.props.data.day}</h5>
            </div>
        );
    }
});

export default Radium(Day);