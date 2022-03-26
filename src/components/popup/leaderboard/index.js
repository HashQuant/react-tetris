import React from 'react';
import Immutable from 'immutable';
import propTypes from 'prop-types';
import cn from 'classnames';

import store from '../../../store';
import popup from '../../../control/todo/popup';
import style from '../index.less';

export default class LeaderBoard extends React.Component {


  componentDidMount() {
    this.dom_close_btn.addEventListener('touchstart', () => {
      popup.hideLeaderBoard(store);
    }, true);
    this.dom_close_btn.addEventListener('mousedown', () => {
      popup.hideLeaderBoard(store);
    }, true);
  }

  shouldComponentUpdate(nextProps) {
    const keyboardHasChanged = !Immutable.is(nextProps.keyboard, this.props.keyboard);
    return keyboardHasChanged || nextProps.active !== this.props.active;
  }

  handleCloseClick() {
    popup.hideLeaderBoard(store);
  }

  render() {
    return (
      <div className={cn({ [style.leaderboardList]: true, [style.active]: this.props.active })}>
        <div>
          <span className={style.close} ref={(c) => { this.dom_close_btn = c; }}>X</span>
        </div>
        <div>
          <span className={style.title}>Leader Board</span>
        </div>
        <div className={style.item}>
          <div className={style.rank} >
            1
          </div>
          <div className={style.content}>
            <img className={style.avatar} src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt="User A" />
            <div className={style.rankInfo}>
              <div className={style.name}>
                User A
              </div>
              <div className={style.points}>3017</div>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.rank} >
            2
          </div>
          <div className={style.content}>
            <img className={style.avatar} src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt="User B" />
            <div className={style.rankInfo}>
              <div className={style.name}>
                User B
              </div>
              <div className={style.points}>2000</div>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.rank} >
            3
          </div>
          <div className={style.content}>
            <img className={style.avatar} src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt="User C" />
            <div className={style.rankInfo}>
              <div className={style.name}>
                User C
              </div>
              <div className={style.points}>2000</div>
            </div>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.rank} >
            99
          </div>
          <div className={style.content}>
            <img className={style.avatar} src="https://www.gravatar.com/avatar/00000000000000000000000000000000" alt="Me" />
            <div className={style.rankInfo}>
              <div className={style.name}>
                Me
              </div>
              <div className={style.points}>700</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  active: propTypes.bool.isRequired,
  keyboard: propTypes.object.isRequired,
};
