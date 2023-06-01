import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cell: {
    width: '14.28%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',

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
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  topLeftQuadrant: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightQuadrant: {
    flex: 1,

  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  names: {
    fontSize: '7px'
  }
  

});