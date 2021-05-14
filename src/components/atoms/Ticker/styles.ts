import React from 'react';

export const hiddenPieceStyle: React.CSSProperties = {
  visibility: "hidden"
};

export const tickStyle: React.CSSProperties = {
  overflow: "hidden",
  display: "inline-block",
  position: "relative"
};

export const rotatorStyle: React.CSSProperties = {
  transition: "transform 0.5s",
  position: "absolute",
  left: "0",
  top: "0",
  bottom: "0",
  right: "0"
};

export const pieceStyle: React.CSSProperties = {
  position: "absolute",
  left: "0",
  zIndex: 10
};
