/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Styles from './Styles';
import StyleBuilder from '../mixins/StyleBuilder.js';

const Icon = React.createClass({

    mixins: [StyleBuilder],

    getDefaultProps() {
        return {
            iconStyle: {
                fill: Styles.ICON.FILL,
                verticalAlign: Styles.ICON.VERTICAL_ALIGN,
                width: Styles.ICON.WIDTH,
                height: Styles.ICON.HEIGHT,
                fontSize: Styles.ICON.FONT_SIZE
            }
        };
    },

    types: {
        LEFT_ARROW: 'fa fa-angle-double-left',
        RIGHT_ARROW: 'fa fa-angle-double-right',
    },

    render() {
        return (  
            <i style={this.buildStyles('iconStyle')} className={this.types[this.props.type]}></i>
        );
    }
});

export default Icon;