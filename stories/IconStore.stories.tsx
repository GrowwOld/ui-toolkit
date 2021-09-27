import "./style.css";

import React from "react";

import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

import {
  IconStore,
  IMG_ICON_LIST,
  MI_ICON_LIST,
} from "../src/components/atoms";
import { Props as IconStoreProps } from "../src/components/atoms/IconStore/IconStore";
import { copyToClipboard } from "../src/utils/helper";

export default {
  title: 'IconStore',
  component: IconStore,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(MI_ICON_LIST)
      }
    }
  }
};


const Template: Story<IconStoreProps> = (args) => {
  return <IconStore {...args} />;
};

export const Icon = Template.bind({});
Icon.args = {
  iconName: MI_ICON_LIST.calendar_today,
  onIconClick: action('MiIconClicked')
};


export const AllImageIcons = (args) => {
  const imgIcons = Object.keys(IMG_ICON_LIST);

  return renderIconsArray(imgIcons, /*getImage*/ true);
};

export const AllMaterialIcons = (args) => {
  const miIcons = Object.keys(MI_ICON_LIST);

  return renderIconsArray(miIcons);
};

export const IconWithText = (args) => {
  const fontSize = 14;

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-small)' }}
      className={`fs${fontSize}`}
    >
      Hello
      <IconStore iconName="calendar_today"
        fontSize={fontSize}
        onIconClick={action('MiIconClicked')}
      />
    </div>
  );
};

export const IconWithTextJustifyBtw = (args) => {
  const fontSize = 14;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100px' }}
      className={`story_card fs${fontSize}`}
    >
      Hello
      <IconStore iconName="calendar_today"
        fontSize={fontSize}
        onIconClick={action('MiIconClicked')}
      />
    </div>
  );
};

export const ImageIcon = Template.bind({});
ImageIcon.args = {
  getImage: true,
  useLazyLoad: false,
  width: 40,
  height: 40,
  iconName: IMG_ICON_LIST.us_product,
  onIconClick: action('ImageIconClicked')
};


const renderIconsArray = (iconList: string[], isImage = false) => {
  return (
    <>
      <div className="clrSubText">Click on any icon to copy the code.</div>
      <div className="story_icon_all_image_list">
        {
          iconList.map(icon => (
            <div
              key={icon}
              className="story_icon_all_image_list_item"
              onClick={() => { copyIconStoreCode(icon, isImage); }}
            >
              <IconStore
                getImage={isImage}
                iconName={icon}
                fontSize={48}
                height={48}
                width={48}
              />
              <div style={{ fontSize: 16, marginTop: 16 }}>{icon}</div>
            </div>
          ))
        }
      </div >
    </>
  );
};


const copyIconStoreCode = (iconName = '', isImage = false) => {
  let code = '';

  if (isImage) {
    code = `<IconStore
  getImage
  iconName={IMG_ICON_LIST.${iconName}}
  fontSize={24}
  height={24}
  width={24}
  iconClass=""
  />`;

  } else {
    code = `<IconStore
  iconName={MI_ICON_LIST.${iconName}}
  fontSize={24}
  height={24}
  width={24}
  iconClass=""
  />`;
  }

  copyToClipboard(code);
};
