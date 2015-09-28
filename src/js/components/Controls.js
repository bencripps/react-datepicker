/* 
* @Author: ben_cripps
* @Date:   2015-09-27 20:29:41
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-28 17:25:19
*/

import React from 'react';
import Styles from './Styles';
import StyleBuilder from '../mixins/StyleBuilder.js';
import reactor from '../reactor/Dispatcher.js';
import Icon from './Icon.jsx';
import DateFormat from '../mixins/DateFormat.js';
import currentDateGetter from '../reactor/getters/currentDate.js';

const Controls = React.createClass({

    mixins: [StyleBuilder, DateFormat, reactor.ReactMixin],

    getDefaultProps() {
        return {
            leftArrowStyles: {
                display: Styles.CONTROLS.ARROWS.DISPLAY,
                fontSize: Styles.CONTROLS.ARROWS.FONT_SIZE,
                position: Styles.CONTROLS.ARROWS.POSITION,
                left: Styles.CONTROLS.ARROWS.LEFT.LEFT,
            },
            rightArrowStyles: {
                display: Styles.CONTROLS.ARROWS.DISPLAY,
                fontSize: Styles.CONTROLS.ARROWS.FONT_SIZE,
                position: Styles.CONTROLS.ARROWS.POSITION,
                right: Styles.CONTROLS.ARROWS.RIGHT.RIGHT,
            },
            arrowContainer: {
                position: Styles.CONTROLS.POSITION,
                height: Styles.CONTROLS.HEIGHT
            }
        };
    },

    getDataBindings() {
        return {
            currentDate: currentDateGetter
        };
    },

    handleClick(direction, mouseE) {
        var newDate = direction === 'right' ? this.advanceMonth(this.state.currentDate) : this.decrementMonth(this.state.currentDate);

        reactor.dispatch('UPDATE_CURRENT_DATE', newDate);
    },

    render() {
        return (
            <div style={this.buildStyles('arrowContainer')}>
                <div style={this.buildStyles('leftArrowStyles')} onClick={this.handleClick.bind(this, 'left')}>
                    <Icon type='LEFT_ARROW' />
                </div>
                <div style={this.buildStyles('rightArrowStyles')} onClick={this.handleClick.bind(this, 'right')}>
                    <Icon type='RIGHT_ARROW' />
                </div>
            </div>
        );
    }



});

export default Controls;