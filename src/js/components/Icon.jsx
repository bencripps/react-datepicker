/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Radium from 'radium';
import Styles from './Styles';

const Icon = React.createClass({

    mixins: [],

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
            <i style={[this.props.iconStyle]} className={this.types[this.props.type]}></i>
        );
    }
});

export default Radium(Icon);