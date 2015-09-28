/* 
* @Author: ben_cripps
* @Date:   2015-09-28 16:37:56
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-28 16:47:35
*/

const selectedDateGetter = [
  ['selectedDate'],
  (selectedDate) => {
    return new Date(selectedDate).toDateString();
  }
];

export default selectedDateGetter;