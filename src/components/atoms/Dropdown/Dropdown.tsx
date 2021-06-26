import React, { cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import './dropDown.css';

import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';

class Dropdown extends React.PureComponent<Props, State> {
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);

    this.state = {
      active: false
    };
  }

  componentDidMount() {
    document.addEventListener('click', this._onWindowClick);
    document.addEventListener('touchstart', this._onWindowClick);
    document.addEventListener('keydown', this._onKeyDownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onWindowClick);
    document.removeEventListener('touchstart', this._onWindowClick);
    document.removeEventListener('keyup', this._onKeyDownHandler);
  }

  render() {
    const { children, className, disabled, removeElement } = this.props;
    // create component classes
    const active = this.isActive();
    const dropdownClasses = cx({
      dropdown: true,
      'dropdown--active': active,
      'dropdown--disabled': disabled
    });
    // stick callback on trigger element
    const boundChildren = React.Children.map(children, child => {
      if (!React.isValidElement<EnrichedChildren>(child)) {
        return child
      }

      if (child.type === DropdownTrigger) {
        const originalOnClick = child.props.onClick;
        child = cloneElement(child, {
          // ref: 'trigger',
          onClick: (event: MouseEvent) => {
            if (!disabled) {
              this._onToggleClick(event);
              if (originalOnClick) {
                originalOnClick.apply(child, originalOnClick.arguments);
              }
            }
          }
        });
      } else if (child.type === DropdownContent && removeElement && !active) {
        child = <></>;
      }
      return child;
    });
    const cleanProps = { ...this.props };
    delete cleanProps.active;
    delete cleanProps.onShow;
    delete cleanProps.onHide;
    delete cleanProps.removeElement;

    return (
      <div
        {...cleanProps}
        className={`${dropdownClasses} ${className}`}>
        {boundChildren}
      </div>
    );
  }

  isActive = () => {
    return (typeof this.props.active === 'boolean') ?
      this.props.active :
      this.state.active;
  }

  hide = () => {
    this.setState({
      active: false
    }, () => {
      if (this.props.onHide) {
        this.props.onHide();
      }
    });
  }

  show = () => {
    this.setState({
      active: true
    }, () => {
      if (this.props.onShow) {
        this.props.onShow();
      }
    });
  }

  _onWindowClick = (event: MouseEvent | TouchEvent) => {
    const dropdownElement = findDOMNode(this);
    if (event.target !== dropdownElement && !dropdownElement?.contains(event.target as Node) && this.isActive()) {
      this.hide();
    }
  }

  _onToggleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this.isActive()) {
      this.hide();
    } else {
      this.show();
    }
  }

  _onKeyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.isActive()) {
      this.hide();
    }
  }
}

Dropdown.defaultProps = {
  className: ''
} as DefaultProps;

type EnrichedChildren = {
  onClick: (e: MouseEvent) => void
  children?: React.ReactNode
}


type State = {
  active: boolean
}

type RequiredProps = {
  children: React.ReactChild | React.ReactChild[],
}

type DefaultProps = {
  className: string
}

export type Props = RequiredProps & DefaultProps & {
  disabled?: boolean,
  active?: boolean,
  onHide?: () => void,
  onShow?: () => void,
  removeElement?: boolean,
  style?: React.CSSProperties,
};

export { DropdownTrigger, DropdownContent };
export default Dropdown;
