import React from 'react';
import cn from 'classnames';

import {
  IconStore, MI_ICON_LIST,
  Dropdown, DropdownTrigger, DropdownContent
} from '../index';

import './select.css';

class Select extends React.PureComponent<Props> {
  optionsRefArr: React.RefObject<HTMLDivElement>[] = [];
  selectDropdownRef: Dropdown | null = null;

  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);

    /*
    optionsRefArr is used to assign a ref to each option
    why?
    while doing up and down from keyboard keys we want that the selected option must be on view port
    and to show a option in viewport forcefully we can call scrollIntoView method using ref
    */
    this.optionsRefArr = props.data.map((_opt) => React.createRef());
  }

  render() {
    const { data: options } = this.props;

    if (options.length) {
      return this.getDropdownUI();
    }

    return null;
  }


  getDropdownUI = () => {
    const {
      data: options,
      placeholder,
      optionClass,
      optionsParentClass,
      activeOptionBoxClass,
      activeIndex
    } = this.props;

    let selectedOption = null;
    if (activeIndex >= 0 && activeIndex < options.length) {
      selectedOption = options[activeIndex]
    }

    return (
      <div className="se55DropDownWrapper">
        <Dropdown
          className="width100"
          ref={ref => (this.selectDropdownRef = ref)}
        >
          <DropdownTrigger>
            <div className="width100 pos-rel">
              <div className={`pos-rel valign-wrapper se55SelectBox clrText ${activeOptionBoxClass}`}>
                <div>
                  {selectedOption ? selectedOption.label : placeholder}
                </div>

                <IconStore
                  iconName={MI_ICON_LIST.keyboard_arrow_down}
                  width={22}
                  height={22}
                />

                <input
                  value={selectedOption?.value}
                  onKeyUp={this.onKeyUp}
                  onKeyDown={this.onKeyDown}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="se55Input"
                />
              </div>

              <DropdownContent
                className={`se55DropdownContent ${optionsParentClass}`}
              >
                {
                  options.map((item, index) => {
                    return (
                      <div
                        key={`selectOption-${index}`}
                        ref={this.optionsRefArr[index]}
                        className={cn('se55DropdownPara', {
                          'se55DropdownParaHover': activeIndex === index,
                          [optionClass]: true
                        })}
                        onClick={() => this.onSelectChange(index)}
                      >
                        {item.label}
                      </div>
                    )
                  })
                }
              </DropdownContent>
            </div>
          </DropdownTrigger>
        </Dropdown>
      </div>
    )
  }


  onSelectChange = (index: number) => {
    this.props.onSelectChange(index);
  }

  onKeyUp = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      this.selectDropdownRef?.hide();
    }

  }


  /* up = 38 */
  /* down = 40 */
  /* to select the option using up and down keys */
  onKeyDown = (event: React.KeyboardEvent) => {
    const { keyCode } = event;
    const { data: options, activeIndex } = this.props;
    let newActiveIndex = 0;

    if (Array.isArray(options) && options.length !== 0 && (keyCode === 38 || keyCode === 40)) {

      /* select the option using up key */
      if (keyCode === 38) {
        if (activeIndex === 0) {
          newActiveIndex = options.length - 1;
        } else {
          newActiveIndex = activeIndex - 1;
        }

      } else if (keyCode === 40) {
        /* select the option using down key */

        if (activeIndex === options.length - 1) {
          newActiveIndex = 0;
        } else {
          newActiveIndex = activeIndex + 1;
        }
      }

      this.props.onSelectChange(newActiveIndex);

      /* to show the selected option in viewport */
      this.optionsRefArr[newActiveIndex]?.current?.scrollIntoView({
        block: 'nearest'
      });

    }

  }

}


Select.defaultProps = {
  data: [],
  activeIndex: -1,
  onSelectChange: () => { },
  placeholder: "Select",
  optionClass: '',
  optionsParentClass: '',
  activeOptionBoxClass: ''
} as DefaultProps;


type SelectData = {
  label: string,
  value: string
}

type RequiredProps = {
  /* array of objects { label: '', value: '' } */
  data: SelectData[],
  /* activeIndex of data array which is selected */
  activeIndex: number,
  /* callback on option selected */
  onSelectChange: (index: number) => void,
}

type DefaultProps = {
  placeholder: string,
  /* class for a single option show in dropdown */
  optionClass: string,
  /* class for a box in which all option shown */
  optionsParentClass: string,
  /* class for a box in which selected values is shown */
  activeOptionBoxClass: string
}

export type Props = RequiredProps & DefaultProps;

export default Select;
