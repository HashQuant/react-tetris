import * as reducerType from '../../unit/reducerType';
import { lastRecord, speeds } from '../../unit/const';

let initState = lastRecord && !isNaN(parseInt(lastRecord.speedStart, 10)) ?
  parseInt(lastRecord.speedStart, 10) : 1;
if (initState < 1 || initState > speeds.length) {
  initState = 1;
}

initState = 6;

const speedStart = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SPEED_START:
      return action.data;
    default:
      return state;
  }
};

export default speedStart;
