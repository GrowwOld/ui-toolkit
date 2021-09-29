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

        return (
          <div
            key={icon}
            className="story_icon_all_image_list_item"
            onClick={() => { copyToClipboard(importCode); }}
          >
            <IconComponent
              custom
              style={{ maxWidth: 220, maxHeight: 120 }}
            />
            <div style={{ fontSize: 16, marginTop: 16 }}>{icon}</div>
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
            <IconComponent />
            <div className="fs16">{icon}</div>
          </div>
        );
      })
    }
  </div>;
};
