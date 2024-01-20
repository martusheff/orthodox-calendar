import { StyleSheet, Dimensions } from 'react-native'
import OCColor from '../../styles/OCColor';
import OCFont from '../../styles/OCFont';

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
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 38,
        color: OCColor.pink,
        textAlign: 'center',
        fontFamily: OCFont.algerian,
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 0,

        ...Platform.select({
            android: {
                textShadowRadius: 0.1,
            },
          }),
    
      
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: containerWidth,
        paddingHorizontal: 8,
        backgroundColor: OCColor.black15,
        borderColor: 'black',
        borderWidth: 1
    },
    yearContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: yearWidth,
        backgroundColor: OCColor.black15,
        borderColor: 'black',
        borderWidth: 1,
        
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
        fontFamily: OCFont.times,
    },
    divider: {
        height: 15,
        width: '100%',
        resizeMode: 'contain',
        tintColor: OCColor.pink,

    }

});