/* 
* @Author: ben_cripps
* @Date:   2015-09-29 22:06:27
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-30 09:51:25
*/
import React from 'react';
import Trigger from '../src/js/components/Trigger.jsx';
import defaultProps from '../src/js/components/config/defaultProps.js';

const comp = <Trigger  {...defaultProps} />

describe('Trigger Component', () => {

    it('Should load with correct props', () => {
        expect(comp.props.afterSelection).toBeTruthy();
        expect(comp.props.containerClassname).toEqual('react-datepickercontainer');
        expect(comp.props.dismissOnSelection).toBe(true);
        expect(comp.props.triggerStyle).toBeTruthy();
    });

    it('Should be registered to our dispatcher', () => {
        expect(comp._store).toBeDefined();
    });

});