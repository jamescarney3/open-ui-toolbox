const [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT] =
  ['top', 'topright', 'right', 'bottomright', 'bottom', 'bottomleft', 'left', 'topleft'];
const ANCHORS = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];
const DIRECTIONS = [TOP, RIGHT, BOTTOM, LEFT];

const getAttachCoords = (clientRect, attach) => {
  const { top, right, bottom, left, width, height } = clientRect;
  switch (attach) {
    case TOP_LEFT:
      return { left: left + (width / 2), top };
    case LEFT:
      return { left, top: top + (height / 2) };
    case BOTTOM_LEFT:
      return { left, top: bottom };
    case BOTTOM:
      return { left: left + (width / 2), top: bottom };
    case BOTTOM_RIGHT:
      return { left: right, top: bottom };
    case RIGHT:
      return { left: right, top: top + (height / 2) };
    case TOP_RIGHT:
      return { left: right, top };
    case TOP:
    default:
      return { left: left + (width / 2), top };
  }
};

const getArrowStyles = ({ clientRect, attach, direction, arrowSize }) => {
  const { left, top } = getAttachCoords(clientRect, attach);
  switch (direction) {
    case LEFT:
      return {
        left: left - arrowSize,
        top: top - (arrowSize / 2),
        borderBottomWidth: arrowSize / 2,
        borderLeftWidth: arrowSize,
        borderTopWidth: arrowSize / 2,
      };
    case BOTTOM:
      return {
        left: left - (arrowSize / 2),
        top,
        borderLeftWidth: arrowSize / 2,
        borderBottomWidth: arrowSize,
        borderRightWidth: arrowSize / 2,
      };
    case RIGHT:
      return {
        left,
        top: top - (arrowSize / 2),
        borderBottomWidth: arrowSize / 2,
        borderRightWidth: arrowSize,
        borderTopWidth: arrowSize / 2,
      };
    case TOP:
    default:
      return {
        left: left - (arrowSize / 2),
        top: top - arrowSize,
        borderLeftWidth: arrowSize / 2,
        borderTopWidth: arrowSize,
        borderRightWidth: arrowSize / 2,
      };
  }
};

const getBodyStyles = ({ arrowSize, attach, direction, clientRect }) => ({ width, height }) => {
  const { left, top } = getAttachCoords(clientRect, attach);
  switch (direction) {
    case LEFT:
      return {
        left: `${left - width - arrowSize}px`,
        top: `${top - (height / 2)}px`,
      };
    case BOTTOM:
      return {
        left: `${left - (width / 2)}px`,
        top: `${top + arrowSize}px`,
      };
    case RIGHT:
      return {
        left: `${left + arrowSize}px`,
        top: `${top - (height / 2)}px`,
      };
    case TOP:
    default:
      return {
        left: `${left - (width / 2)}px`,
        top: `${top - height - arrowSize}px`,
      };
  }
};

export { ANCHORS, DIRECTIONS, getArrowStyles, getAttachCoords, getBodyStyles };
