
import event from '../../unit/event';
import actions from '../../actions';

const showLeaderBoard = (store) => {
  store.dispatch(actions.popup.toggleLeaderBoard(true));
  event.down({
    key: 'showLeaderBoard',
    once: true,
    callback: () => {
    },
  });
};

const hideLeaderBoard = (store) => {
  store.dispatch(actions.popup.toggleLeaderBoard(false));
};


export default {
  showLeaderBoard,
  hideLeaderBoard,
};
