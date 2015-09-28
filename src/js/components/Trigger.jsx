/* 
* @Author: ben_cripps
* @Date:   2015-09-26 16:41:28
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-26 16:53:04
*/

import React from 'react';
import Styles from './Styles';
import Container from './Container.jsx';
import StyleBuilder from '../mixins/StyleBuilder.js';
import Dismisser from '../mixins/Dismisser.js';
import reactor from '../reactor/Dispatcher.js';
import isPickerShownGetter from '../reactor/getters/isPickerShown.js';

const Trigger = React.createClass({

    mixins: [StyleBuilder, Dismisser, reactor.ReactMixin],

    getDataBindings() {
        return {
            isPickerShown: isPickerShownGetter
        };
    },

    getDefaultProps() {
        return {
            triggerStyle: {
                backgroundColor: Styles.INPUT.BACKGROUND_COLOR,
                height: Styles.INPUT.HEIGHT,
                width: Styles.INPUT.WIDTH,
                fontSize: Styles.GENERAL.FONT_SIZE,
                fontFaimly: Styles.GENERAL.FONT_FAMILY,
                textAlign: Styles.INPUT.TEXT_ALIGN
            }
        };
    },

    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (this.state.isPickerShown && this.shouldDismiss(e)) this.resetContainer();
        }, this);
    },

    resetContainer() {
        reactor.dispatch('UPDATE_PICKER_VISIBILITY', !this.state.isPickerShown);
    },

    render() {
        return (  
            <div> 
                <input 
                    className={this.props.triggerClassname} 
                    type='text' 
                    value={this.props.currentDate} 
                    style={this.buildStyles('triggerStyle')} 
                    onClick={this.resetContainer} />
                <Container {...this.state} {...this.props}/>
            </div>
        );
    }
});

export default Trigger;