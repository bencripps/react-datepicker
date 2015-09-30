/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Radium from 'radium';
import Styles from './Styles';
import Dismisser from '../mixins/Dismisser.js';
import DateFormat from '../mixins/DateFormat.js';
import Controls from './Controls.js';
import Calendar from './Calendar.jsx';

const Container = React.createClass({

    mixins: [Dismisser, DateFormat],

    getDefaultProps() {
        return {
            containerStyle: {
                position: Styles.CONTAINER.POSITION,
                height: Styles.CONTAINER.HEIGHT,
                width: Styles.CONTAINER.WIDTH,
                border: Styles.CONTAINER.BORDER,
                left: Styles.CONTAINER.LEFT,
                right: Styles.CONTAINER.RIGHT,
                margin: Styles.CONTAINER.MARGIN,
                boxShadow: Styles.GENERAL.BOX_SHADOW
            },
            titleStyle: {
                fontFamily: Styles.GENERAL.FONT_FAMILY,
                fontSize: Styles.TITLE.FONT_SIZE,
            }
        };
    },

    render() {
        let component = this.props.isPickerShown ? this.getContainer() : null;

        return (
            component
        );
    },

    getTitleTemplate() {
        return `${this.getMonth(this.props.currentDate)} ${this.getYear(this.props.currentDate)}`;
    },

    getContainer() {
        
        return (
            <div style={[this.props.containerStyle]} className={this.props.containerClassname}>
                <h2 style={[this.props.titleStyle]}>
                    {this.getTitleTemplate()}
                </h2>
                <Controls {...this.props} />
                <Calendar {...this.props} />
            </div>
        );
    }   

});

export default Radium(Container);