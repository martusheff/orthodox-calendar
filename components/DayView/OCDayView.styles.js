import { StyleSheet, Dimensions } from "react-native";


const screenHeight = Dimensions.get('window').height;
const tenPercent = screenHeight * 0.1; // 20% of the screen height


export default StyleSheet.create({
    container: {
        marginTop: 6,
        gap: 10
    },
    fastCell: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: '100%',
        flexDirection: 'row',
        fontFamily: 'TimesNewRoman',
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    dayTitleCell: {
        // backgroundColor: '#ee018c',
        paddingTop: 16

    },
    fastCellImage: {
        // tintColor: '#ee018c',
    },
    fastCellText: {
        fontFamily: 'TimesNewRoman',
        fontSize: 16,
        paddingHorizontal: 8
    },
    borderBlack: {
        height: '22%',
        borderWidth: 1,
    },
    borderGrey: {
        height: '100%',
        borderWidth: 2,
        borderColor: 'darkgrey',
    },
    dayTitle: {
        fontFamily: 'TimesNewRoman',
        fontSize: 20,
        paddingHorizontal: 6
    },
    divider: {
        marginVertical: 4
    },
    cell: {
        marginTop: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
    },
    aboutTitle: {
        fontFamily: 'TimesNewRoman',
        fontSize: 21,
        padding: 4
    },
    aboutBody: {
        fontFamily: 'TimesNewRoman',
        textAlign: 'justify',
        fontSize: 17,
        padding: 4
    },
    saintBody: {
        fontFamily: 'TimesNewRoman',
        textAlign: 'justify',
        fontSize: 14,
        paddingHorizontal: 4
    },

    fastCellContainer: {

        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },
    fastTitleCell: {
        flex: 6,
        gap: 8
    },
    fastIconCell: {
        flex: 2,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1/1
    },
    fastTitleCellTopContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 8
    },
    fastTitleCellTop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1 ,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    fastTitleCellBottom: {
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    fastLabel: {
        fontFamily: 'TimesNewRoman',
        fontSize: 18,
        paddingHorizontal: 8,
        
    },
    scrollView: {
        // flexGrow: 1,
        // showsVerticalScrollIndicator: false
    },
    holidayIconContainer: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    holidayIcon: {
        width: 21,
        height: 21
    }
});