/* 
* @Author: ben_cripps
* @Date:   2015-09-29 22:06:27
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-30 09:51:25
*/
import React from 'react';
import reactor from '../../src/js/reactor/Dispatcher.js';

describe('Reactor', () => {

    it('Should be tracking 3 properties', () => {
        expect(reactor.state.size).toEqual(3);
    });

    it('Should have 3 stores registered', () => {
        expect(reactor.__stores._root.entries.length).toEqual(3);
    });
    
});