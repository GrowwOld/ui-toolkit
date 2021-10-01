import './style.css';

import React from 'react';

import * as imgIcons from '@groww-tech/icon-store/custom';
import * as materialIcons from '@groww-tech/icon-store/mi';

import { copyToClipboard } from '../src/utils/helper';

export default {
  title: 'IconStore'
};


export const AllImageIcons = () => {
  return <div className="story_icon_all_image_list">
    {
      Object.keys(imgIcons).map(icon => {
        const IconComponent = imgIcons[icon];
        const importCode = `import { ${icon} } from '@groww-tech/icon-store/custom';`;
        const isDarkIcon = icon.includes('Dark');
        const darkStyles = {
          backgroundColor: '#121212',
          color: '#FFF'
        };

        return (
          <div
            key={icon}
            className="story_icon_all_image_list_item"
            onClick={() => { copyToClipboard(importCode); }}
            style={isDarkIcon ? darkStyles : {}}
          >
            <IconComponent
              custom
              size={48}
            />
            <div style={{ fontSize: 16, marginTop: 32 }}>{icon}</div>
          </div>
        );
      })
    }
  </div>;
};


export const AllMaterialIcons = () => {
  return <div className="story_icon_all_image_list">
    {
      Object.keys(materialIcons).map(icon => {
        const IconComponent = materialIcons[icon];
        const importCode = `import { ${icon} } from '@groww-tech/icon-store/mi';`;

        return (
          <div
            key={icon}
            className="story_icon_all_image_list_item"
            onClick={() => { copyToClipboard(importCode); }}
          >
            <IconComponent size={48}/>
            <div className="fs16">{icon}</div>
          </div>
        );
      })
    }
  </div>;
};
