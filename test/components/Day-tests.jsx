/* 
* @Author: ben_cripps
* @Date:   2015-09-29 22:06:27
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-30 09:51:25
*/

import React from 'react';
import Day from '../../src/js/components/Day.jsx';

const props = {
    currentDate: 1443582772705,
    dismissOnSelection: true,
    afterSelection:  () => {}
};

const comp = <Day {...props} />

describe('Day Component', () => {

    it('Should load with correct props', () => {
       expect(comp.props.afterSelection).toBeDefined();
       expect(comp.props.dismissOnSelection).toBe(true);
       expect(comp.key).toBeFalsy();
       expect(comp.props.currentDate).toEqual(props.currentDate);
    });

    it('Should be registered to our dispatcher', () => {
        expect(comp._store).toBeDefined();
    });

});