export const measureHeight = (className: string, value: string) => {
  if (typeof document !== 'undefined') {
    const d = document.createElement("span");
    d.textContent = value;
    d.className = className;
    d.style.opacity = "0";
    d.style.pointerEvents = "none";
    d.style.position = "absolute";
    document.body.appendChild(d);
    const height = d.offsetHeight;
    document.body.removeChild(d);
    return height;
  }

  return 0;
};
