/* 
* @Author: ben_cripps
* @Date:   2015-09-28 20:58:03
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-10-01 20:31:53
*/

const DAY = {
    CONTAINER: {
        DISPLAY: 'inline-block',
        WIDTH: '40px',
        HEIGHT: '40px',
        BORDER: '1px solid black',
        MARGIN: '2px',
        VERTICAL_ALIGN: 'top',
        TEXT_ALIGN: 'center',
        POSITION: 'relative',
        TRANSFORM: 'scale(1.00)',
        HOVER_TRANSFORM: 'scale(1.10)',
        TRANSITION_PROPERTY: 'transform'
    },
    TITLE: {
        POSITION: 'absolute'
    },
    DATE_TITLE: {
        FONT_SIZE: '11px',
        TOP: '-15px',
        LEFT: '3px'
    },
    DAY_TITLE: {
        FONT_SIZE: '14px'
    },
    ACTIVE_STYLE: {
        BACKGROUND_COLOR: '#C2E0FF'
    }
};

export default DAY;