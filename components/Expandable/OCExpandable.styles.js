// Expandable.styles.js
import { StyleSheet } from 'react-native';
import OCFont from '../../styles/OCFont';

export default StyleSheet.create({
  container: {
    padding: 6,
    // Add more container styles as needed
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: OCFont.times,
    fontSize: 18
    // Add more title text styles as needed
  },
  descriptionText: {
    paddingTop: 8,
    fontFamily: OCFont.times,
    fontSize: 16,
    lineHeight: 18
    // Add more description text styles as needed
  },
  icon: {
    // styles for the icon
  },
  iconExpanded: {
    transform: [{ rotate: '90deg' }],  // Rotate icon when expanded
  },
  divider: {
    paddingVertical: 4
  },
  readMoreContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 8
  },
  readMoreLabel: {
    fontFamily: OCFont.times,
    fontSize: 16,
    padding: 8,
    borderWidth: 1
  }
});
