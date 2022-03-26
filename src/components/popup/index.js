
import React from 'react';
import Immutable from 'immutable';
import propTypes from 'prop-types';

import LeaderBoard from './leaderboard';

export default class Popup extends React.Component {

  shouldComponentUpdate(nextProps) {
    const popupHasChanged = !Immutable.is(nextProps.popup, this.props.popup);
    const keyboardHasChanged = !Immutable.is(nextProps.keyboard, this.props.keyboard);
    return popupHasChanged || keyboardHasChanged;
  }

  render() {
    const popup = this.props.popup;
    const active = popup.get('toggleLeaderBoard');
    return <LeaderBoard active={active} keyboard={this.props.keyboard} />;
  }
}

Popup.propTypes = {
  popup: propTypes.object.isRequired,
  keyboard: propTypes.object.isRequired,
};
