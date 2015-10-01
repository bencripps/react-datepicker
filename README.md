# React Date-Picker 

A React Date-Picker component built with ontop of the Nuclear FLUX implementation. 

## Dependencies 
- [React](https://github.com/facebook/react)
- [Nuclear-js](https://github.com/optimizely/nuclear-js)
- [Radium](https://github.com/FormidableLabs/radium)

## Installation 
Component is written in ES6 and utilizes JSX, and thus requires transpilation. Please see `demo/built.jsx` for more information about how to instantiate the component.
    
    import React from 'react';
    import DatePicker from 'path/to/DatePicker.jsx';
    let options = {
        dismissOnSelection: false
    }
    document.addEventListener('DOMContentLoaded', function() {
        React.render(<DatePicker {...options} />, document.getElementById('datepicker-mount'));
    });

## Options

    dismissOnSelection: Boolean
    startDate: Date
    triggerClassname: String
    containerClassname: String

## Test
    npm run test

## Questions/Issues
If you have any questions, contributions, or issues, you can contact me at [ben@benjamincripps.com](mailto:ben@benjamincripps.com)
