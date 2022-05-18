import React from 'react';
import cn from 'classnames';
import { Close } from '@groww-tech/icon-store/mi';

import { isEmpty } from '../../../utils/helper';

import './toastify.css';

export const TOASTIFY_TYPE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INFO: 'INFO'
};

export const TOASTIFY_POSITION = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM'
};

class Toastify extends React.PureComponent<Props, State> {
  static defaultProps:Props;


  timeoutHandler: NodeJS.Timeout | number | null = null;


  state:State = {
    open: false,
    msg: this.props.msg // Initially load the msg state from props, this state is then source of truth
  }


  componentDidUpdate(_prevProps:Props) {
    const { msg } = this.props;

    if (msg) {
      this.setState({ msg });
    }
  }


  componentWillUnmount() {
    clearTimeout(this.timeoutHandler as NodeJS.Timeout);
  }


  render() {
    const { open, msg } = this.state;
    const { msgType, position, showCloseBtn } = this.props;

    return (
      <div
        className={
          cn('sb10Toastify', {
            'sb10ToastifyShow': open,
            'sb10ToastifySuccess': msgType === TOASTIFY_TYPE.SUCCESS,
            'sb10ToastifyError': msgType === TOASTIFY_TYPE.ERROR,
            'sb10ToastifyInfo': msgType === TOASTIFY_TYPE.INFO,
            'sb10ToastifyPositionTop': position === TOASTIFY_POSITION.TOP,
            'sb10ToastifyPositionBottom': position === TOASTIFY_POSITION.BOTTOM
          })
        }
      >
        <div className="valign-wrapper vspace-between">
          <div>{msg}</div>
          {
            showCloseBtn
              ? <Close
                size={22}
                className="sb10ToastifyCloseIcn"
                onClick={this.close}
              />
              : null
          }
        </div>
      </div>
    );
  }


  open = (msg = '', timeOut = this.props.timeOut, autoClose = this.props.autoClose) => {
    // msg argument is optional
    this.setState({
      open: true,
      msg: isEmpty(msg) ? this.state.msg : msg
    });

    if (autoClose) {
      this.timeoutHandler = setTimeout(this.close, timeOut);
    }
  }


  close = () => {
    // clear any timeout and then proceed
    clearTimeout(this.timeoutHandler as NodeJS.Timeout);

    this.setState({
      open: false
    });
  }
}


type Props = {
  ref?: React.RefObject<Toastify>;
  msg: string;
  timeOut?: number; /* how much time we have to show toasify */
  msgType?: string; /* status can be SUCCESS, ERROR, INFO */
  position?: string;
  showCloseBtn?: boolean;
  autoClose?: boolean;
};


type State = {
  msg: string;
  open: boolean;
}

Toastify.defaultProps = {
  msg: '',
  timeOut: 4000,
  msgType: TOASTIFY_TYPE.INFO,
  position: TOASTIFY_POSITION.BOTTOM,
  showCloseBtn: false,
  autoClose: true
};

export default Toastify;
