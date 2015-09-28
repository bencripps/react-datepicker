/* 
* @Author: ben_cripps
* @Date:   2015-09-27 20:29:41
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-27 20:33:00
*/

import React from 'react';
import Styles from './Styles';
import StyleBuilder from '../mixins/StyleBuilder.js';
import reactor from '../reactor/Dispatcher.js';

const Controls = React.createClass({

    mixins: [StyleBuilder, reactor.ReactMixin],

    getDataBindings() {
        return {};
    },

    render() {
        return (
            <div>
                <div>
                    Right
                </div>
                <div>
                    Left
                </div>
            </div>
        );
    }



});

export default Controls;