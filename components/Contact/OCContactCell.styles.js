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
  },
  inputHeader: {
    fontFamily: OCFont.times,
    fontSize: 15,
    paddingTop: 8,
    paddingLeft: 4,
    paddingBottom: 4
  },
  input: {
    fontFamily: OCFont.times,
    fontSize: 18,
    lineHeight: 22,
    backgroundColor: 'white',
    padding: 4,
    paddingHorizontal: 12,
    borderWidth: 1
  },
  textArea: {
    fontFamily: OCFont.times,
    fontSize: 18,
    lineHeight: 22,
    height: 22 * 5,
    backgroundColor: 'white',
    padding: 4,
    paddingHorizontal: 12,
    borderWidth: 1
  },
  readMoreContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 12
  },
  readMoreLabel: {
    fontFamily: OCFont.times,
    fontSize: 16,
    padding: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white'
  }
});
