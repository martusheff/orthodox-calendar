// Expandable.styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {

    padding: 4,
    // Add more container styles as needed
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: 'TimesNewRoman',
    fontSize: 18
    // Add more title text styles as needed
  },
  descriptionText: {
    paddingTop: 8,
    fontFamily: 'TimesNewRoman',
    fontSize: 15
    // Add more description text styles as needed
  },
  icon: {
    // styles for the icon
    transition: 'transform 0.3s', // This line is for web; it's a no-op in React Native but included for reference
  },
  iconExpanded: {
    transform: [{ rotate: '90deg' }],  // Rotate icon when expanded
  },
  divider: {
    paddingVertical: 4
  }
});
