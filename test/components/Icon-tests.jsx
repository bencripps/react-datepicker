/* 
* @Author: ben_cripps
* @Date:   2015-09-29 22:06:27
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-30 09:51:25
*/

import React from 'react';
import Icon from '../../src/js/components/Icon.jsx';

const LEFT_ICON = 'LEFT_ARROW';
const RIGHT_ICON = 'RIGHT_ARROW';

const leftArrow = <Icon type={LEFT_ICON} />
const rightArrow = <Icon type={RIGHT_ICON} />

describe('Icon Component', () => {

    it('Should render the icon components correctly', () => {
        expect(leftArrow).toBeDefined();
        expect(rightArrow).toBeDefined();
    });

    it('Should be of the correct type', () => {
        expect(leftArrow.props.type).toEqual(LEFT_ICON);
        expect(rightArrow.props.type).toEqual(RIGHT_ICON);
    });
});