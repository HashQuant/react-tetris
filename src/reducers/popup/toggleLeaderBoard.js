
import * as reducerType from '../../unit/reducerType';

const initState = false;
const toggleLeaderBoard = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SHOW_LEADER_BOARD:
      return action.data;
    default:
      return state;
  }
};

export default toggleLeaderBoard;
