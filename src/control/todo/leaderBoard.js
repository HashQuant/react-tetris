import event from '../../unit/event';
import actions from '../../actions';

const down = (store) => {
  store.dispatch(actions.keyboard.leaderBoard(true));
  store.dispatch(actions.popup.toggleLeaderBoard(true));
  event.down({
    key: 'leaderBoard',
    once: true,
    callback: () => {
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.leaderBoard(false));
};


export default {
  down,
  up,
};
