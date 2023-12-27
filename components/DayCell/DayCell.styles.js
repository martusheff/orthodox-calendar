import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cell: {
    width: '14.28%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.75
  },
  emptyCell: {
    width: '14.28%',
    height: 90,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  bottomContainer: {
    flex: 3,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  topLeftQuadrant: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.75,
    borderBottomWidth: 0.75,
    aspectRatio: 1 / 1,
  },
  topRightQuadrant: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1 / 1
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fastLevelWrapper: {
    flex: 1,
    paddingVertical: 4
  },
  saintsWrapper: {
    flex: 2,
    paddingVertical: 4,
    textAlign: 'center',
    overflow: 'hidden'
  },
  names: {
    fontSize: 6.5,
    lineHeight: 6.25,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman',
    paddingHorizontal: 2
  },
  holidayContainer: {
    paddingTop: 2
  },
  holiday: {
    fontSize: 6.5,
    lineHeight: 5.75,
    textAlign: 'center',
    fontFamily: 'TimesNewRoman',
    color: '#ee018c',
    padding: 2

  },
  todayIndicator: {
    backgroundColor: '#ee018c',
    color: 'white'
  },
  left: {
    borderRightWidth: 0
  },
  middle: {
    borderRightWidth: 0,
  },
  right: {

  },
  centerLeft: {
    borderRightWidth: 0,
    borderTopWidth: 0
  },
  centerLeftLeading: {
    borderRightWidth: 0,
    borderTopWidth: 0.75
  },
  centerMiddle: {
    borderRightWidth: 0,
    borderTopWidth: 0
  },
  centerRight: {
    borderTopWidth: 0,
  },
  centerLast: {
    borderTopWidth: 0
  },
  last: {
    borderTopWidth: 0
  },
  centerMiddleLeading: {
    borderRightWidth: 0,
    borderTopWidth: 0.75
  },
  firstLast: {
    borderRightWidth: 0.75
  },
  firstFirst: {
    borderBottomWidth: 0,
    borderRightWidth: 0
  },
  topLeftDate: {
    fontFamily: 'TimesNewRoman',
    fontSize: 16
  },
  topRightDate: {
    fontFamily: 'TimesNewRoman',
    fontSize: 9,
  },
  holidayCell: {
    backgroundColor: '#ffd9e8'
  },
  topRightQuadrantTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.75
  },
  topRightQuadrantBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 2,
    flex: 1
  },
  greyBox: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderTopWidth: 0.75
  },
  holidayIcon: {
    width: 8,
    height: 8
  }
});