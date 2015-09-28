/* 
* @Author: ben_cripps
* @Date:   2015-09-27 20:29:41
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-27 21:39:30
*/

import React from 'react';
import Styles from './Styles';
import StyleBuilder from '../mixins/StyleBuilder.js';
import reactor from '../reactor/Dispatcher.js';

const Controls = React.createClass({

    mixins: [StyleBuilder, reactor.ReactMixin],

    getDefaultProps() {
        return {
            leftArrowStyles: {
                display: Styles.CONTROLS.ARROWS.DISPLAY,
                fontSize: Styles.CONTROLS.ARROWS.FONT_SIZE,
                position: Styles.CONTROLS.ARROWS.POSITION,
                left: Styles.CONTROLS.ARROWS.LEFT.LEFT,
                iconGlyph: Styles.CONTROLS.ARROWS.LEFT.ICON_GLYPH
            },
            rightArrowStyles: {
                display: Styles.CONTROLS.ARROWS.DISPLAY,
                fontSize: Styles.CONTROLS.ARROWS.FONT_SIZE,
                position: Styles.CONTROLS.ARROWS.POSITION,
                right: Styles.CONTROLS.ARROWS.RIGHT.RIGHT,
                iconGlyph: Styles.CONTROLS.ARROWS.RIGHT.ICON_GLYPH
            },
            arrowContainer: {
                position: Styles.CONTROLS.POSITION,
            }
        };
    },

    getDataBindings() {
        return {};
    },

    render() {
        console.log(this.props.leftArrowStyles.glyph);
        return (
            <div style={this.buildStyles('arrowContainer')}>
                <div style={this.buildStyles('leftArrowStyles')}>
                    //to do need to add icons
                </div>
                <div style={this.buildStyles('rightArrowStyles')}>
                    //to do need to add icons
                </div>
            </div>
        );
    }



});

export default Controls;