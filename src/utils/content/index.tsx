import React from 'react';

export const scrollTopDummyContent = () => (
  <div style={{ position: 'relative', minHeight: 2000 }}
    className="valign-wrapper"
  >
    <div style={{ position: 'absolute', top: 10 }}
      className="center-align"
    >Scroll down to bottom to make the ScrollTop button visible in bottom-right corner.</div>
    <div style={{ position: 'absolute', bottom: 10 }}
      className="center-align"
    >ScrollTop button will disappear if you scroll up</div>
  </div>
);
