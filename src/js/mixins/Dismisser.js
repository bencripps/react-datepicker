/* 
* @Author: ben_cripps
* @Date:   2015-09-27 11:29:49
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-27 11:44:20
*/

const Dismisser = {

    shouldDismiss(e) {
        let target = e.target;

        while (target != document) {
            if (target && target.classList && target.classList.contains(this.props.containerClassname)) {
                return false;
            }
            target = target.parentNode;
        }
        return true;
    }

};

export default Dismisser;