/* 
* @Author: ben_cripps
* @Date:   2015-09-27 20:29:41
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-29 21:23:27
*/

import React from 'react';
import Radium from 'radium';
import Styles from './Styles';
import reactor from '../reactor/Dispatcher.js';
import Icon from './Icon.jsx';
import DateFormat from '../mixins/DateFormat.js';
import currentDateGetter from '../reactor/getters/currentDate.js';

const Controls = React.createClass({

    mixins: [DateFormat, reactor.ReactMixin],

    getDefaultProps() {
        return {
            leftArrowStyles: {
                display: Styles.CONTROLS.ARROWS.DISPLAY,
                fontSize: Styles.CONTROLS.ARROWS.FONT_SIZE,
                position: Styles.CONTROLS.ARROWS.POSITION,
                left: Styles.CONTROLS.ARROWS.LEFT.LEFT,
                transform: Styles.CONTROLS.ARROWS.TRANSFORM,
                transitionDuration: Styles.GENERAL.TRANSITION_DURATION,
                transitionTimingFunction: Styles.GENERAL.TRANSFORM_TIMING_FUNCTION,
                transitionProperty: Styles.CONTROLS.ARROWS.TRANSITION_PROPERTY,
                ':hover': {
                    transform: Styles.CONTROLS.ARROWS.HOVER_TRANSFORM
                }
            },
            rightArrowStyles: {
                display: Styles.CONTROLS.ARROWS.DISPLAY,
                fontSize: Styles.CONTROLS.ARROWS.FONT_SIZE,
                position: Styles.CONTROLS.ARROWS.POSITION,
                right: Styles.CONTROLS.ARROWS.RIGHT.RIGHT,
                transform: Styles.CONTROLS.ARROWS.TRANSFORM,
                transitionDuration: Styles.GENERAL.TRANSITION_DURATION,
                transitionTimingFunction: Styles.GENERAL.TRANSFORM_TIMING_FUNCTION,
                transitionProperty: Styles.CONTROLS.ARROWS.TRANSITION_PROPERTY,
                ':hover': {
                    transform: Styles.CONTROLS.ARROWS.HOVER_TRANSFORM
                }
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
            <div style={[this.props.arrowContainer]}>
                <div key='ARROW_LEFT' style={[this.props.leftArrowStyles]} onClick={this.handleClick.bind(this, 'left')}>
                    <Icon type='LEFT_ARROW' />
                </div>
                <div key='ARROW_RIGHT' style={[this.props.rightArrowStyles]} onClick={this.handleClick.bind(this, 'right')}>
                    <Icon type='RIGHT_ARROW' />
                </div>
            </div>
        );
    }



});

export default Radium(Controls);