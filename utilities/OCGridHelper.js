export const OCDayCellPosition = {
    LEFT: 'left',
    MIDDLE: 'middle',
    RIGHT: 'right',
    CENTER_LEFT: 'centerLeft',
    CENTER_MIDDLE: 'centerMiddle',
    CENTER_RIGHT: 'centerRight',
    LAST: 'last',
    FIRST_LAST: 'firstLast',
    FIRST_FIRST: 'firstFirst',
    CENTER_LAST: 'centerLast',
    CENTER_LEFT_LEADING: 'centerLeftLeading',
    CENTER_MIDDLE_LEADING: 'centerMiddleLeading'
  };

  export function getCellPosition(i, j, dim, r) {
    if (i == 1) {
      if (j == 0) {
        return OCDayCellPosition.FIRST_FIRST;
      }
      if (j == 6) {
        return OCDayCellPosition.FIRST_LAST;
      }
      return r > 1 && r < 35 ? OCDayCellPosition.CENTER_LEFT : OCDayCellPosition.LEFT;
    } else if (i == dim.length) {
      return r > 1 && r < 35 ? OCDayCellPosition.CENTER_LAST : OCDayCellPosition.LAST;
    } else if (j % 7 == 0) {
      return r > 1 && r < 35 ? j < 8 ? OCDayCellPosition.CENTER_LEFT_LEADING : OCDayCellPosition.CENTER_LEFT : OCDayCellPosition.LEFT;
    } else if (j % 7 == 6) {
      return r > 1 && r < 35 ? OCDayCellPosition.CENTER_RIGHT : OCDayCellPosition.RIGHT;
    } else if (i < 8) {
      return OCDayCellPosition.CENTER_MIDDLE_LEADING;
    }
    return r > 1 && r < 35 ? OCDayCellPosition.CENTER_MIDDLE : OCDayCellPosition.MIDDLE;
  }