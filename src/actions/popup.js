
import * as reducerType from '../unit/reducerType';

function toggleLeaderBoard(data) {
  return {
    type: reducerType.SHOW_LEADER_BOARD,
    data,
  };
}

export default {
  toggleLeaderBoard,
};
