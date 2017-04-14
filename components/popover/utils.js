const [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT] =
  ['top', 'topright', 'right', 'bottomright', 'bottom', 'bottomleft', 'left', 'topleft'];
const ANCHORS = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];

const getAttachCoords = (clientRect, attach) => {
  const { top, right, bottom, left, width, height } = clientRect;
  switch (attach) {
    case TOP_LEFT:
      return { x: left + (width / 2), y: top };
    case LEFT:
      return { x: left, y: top + (height / 2) };
    case BOTTOM_LEFT:
      return { x: left, y: bottom };
    case BOTTOM:
      return { x: left + (width / 2), y: bottom };
    case BOTTOM_RIGHT:
      return { x: right, y: bottom };
    case RIGHT:
      return { x: right, y: top + (height / 2) };
    case TOP_RIGHT:
      return { x: right, y: top };
    case TOP:
    default:
      return { x: left + (width / 2), y: top };
  }
};

export { ANCHORS, getAttachCoords };
