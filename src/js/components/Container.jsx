/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Styles from './Styles';
import StyleBuilder from '../mixins/StyleBuilder.js';
import Dismisser from '../mixins/Dismisser.js';
import DateFormat from '../mixins/DateFormat.js';
import Controls from './Controls.js';

const Container = React.createClass({

    mixins: [StyleBuilder, Dismisser, DateFormat],

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

    getContainer() {
        
        return (<div style={this.buildStyles('containerStyle')} className={this.props.containerClassname}>
                    <h2 style={this.buildStyles('titleStyle')}>
                        {this.getMonth(this.props.currentDate)}
                    </h2>
                    <Controls {...this.props} />
                </div>
        );
    }   

});

export default Container;