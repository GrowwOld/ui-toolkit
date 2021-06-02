import React, {
  useEffect,
  useState
} from "react";

import cn from "classnames";

import "./tabs.css";

const Tabs = (props: Props) => {
  const {
    onTabSelect,
    activeTabIndexOnMount,
    data,
    showBottomBorder,
    customStyleTab
  } = props;

  const [activeIndex, setActiveIndex] = useState(activeTabIndexOnMount);

  const { width, left } = getActiveTabDimensions(data, activeIndex);

  useEffect(() => {
    setActiveIndex(props.activeTabIndexOnMount);
  }, [props.activeTabIndexOnMount])

  const onTabClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }

    onTabSelect(index);
  }


  return (
    <div className={cn('tabs8Container', { 'tabs8Shadow': showBottomBorder })}>
      {
        width > 0 &&
        <div className="tabs8Line mfSelected" style={{ width, left }} />
      }

      <div className="valign-wrapper">
        {data.map((item, key) => {
          return (
            <div
              className={`${customStyleTab} ${key === activeIndex && "tabs8TextActive"}`}
              title={item.description}
              onClick={onTabClick.bind(null, key)}
              style={item.style}
              key={key}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  );
}


const getActiveTabDimensions = (data: Tab[], activeIndex: number) => {
  let left = 0;
  let width = 0;

  const activeTab = data[activeIndex];

  if (activeTab && activeTab.hasOwnProperty('width') && activeTab.hasOwnProperty('left')) {
    width = activeTab.width || 0;
    left = activeTab.left || 0;

    return {
      "width": width,
      "left": left
    };

  } else {
    if (typeof document !== "undefined") {
      let prevActiveElement = document?.getElementsByClassName('tabs8TextActive') as HTMLCollectionOf<HTMLElement>;

      if (prevActiveElement && prevActiveElement.length) {
        const currentActiveElement = prevActiveElement[0]?.parentElement?.children[activeIndex] as HTMLElement;

        return {
          "width": currentActiveElement?.offsetWidth,
          "left": currentActiveElement?.offsetLeft
        };

      } else {
        return {
          "width": width,
          "left": left
        };
      }

    } else {
      return {
        "width": 0,
        "left": 0
      };
    }
  }

}


const defaultProps: DefaultProps = {
  showBottomBorder: true,
  activeTabIndexOnMount: 0,
  customStyleTab: 'tabs8Text'
}


type DefaultProps = {
  showBottomBorder: boolean;
  activeTabIndexOnMount: number;
  customStyleTab: string;
}


type RequiredProps = {
  data: Tab[];
  onTabSelect: (index: number) => void;
}

type Tab = {
  description?: string;
  name: React.ReactNode;
  style?: React.CSSProperties;
  width?: number;
  left?: number;
}


Tabs.defaultProps = defaultProps;

export type Props = DefaultProps & RequiredProps;

export default React.memo(Tabs);
