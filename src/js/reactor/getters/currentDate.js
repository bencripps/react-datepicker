/* 
* @Author: ben_cripps
* @Date:   2015-09-27 19:27:27
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-28 16:33:11
*/

const currentDateGetter = [
  ['currentDate'],
  (currentDate) => {
    return new Date(currentDate).toDateString();
  }
];

export default currentDateGetter;