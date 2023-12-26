import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;
const containerWidth = screenWidth / 7 * 5 - 36;
const yearWidth = screenWidth / 7 - 10;

export default StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 8,
        gap: 4
    },
    title: {
        fontSize: 38,
        color: '#ee018c',
        textAlign: 'center',
        fontFamily: 'Algerian',

        ...Platform.select({
            ios: {
              textShadowColor: 'black',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 0,
            },
            android: {
              // Different or additional styling for Android
              // Android doesn't support text shadows well; consider alternatives
              elevation: 1, // or other styling that achieves a similar effect
            },
          }),

    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: containerWidth,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderColor: 'black',
        borderWidth: 1
    },
    yearContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: yearWidth,
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderColor: 'black',
        borderWidth: 1
    },

    containerBorder: {
        borderColor: 'darkgray',
        borderWidth: 2
    },
    containerBorderBorder: {
        borderColor: 'black',
        borderWidth: 1
    },
    year: {

        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'TimesNewRoman',
    },
    divider: {
        height: 15,
        width: '100%',
        resizeMode: 'contain',
        tintColor: '#ee018c',

    }

});