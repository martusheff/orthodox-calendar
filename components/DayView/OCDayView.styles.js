import { StyleSheet, Dimensions } from "react-native";
import OCFont from "../../styles/OCFont";
import OCColor from "../../styles/OCColor";


const screenHeight = Dimensions.get('window').height;
const tenPercent = screenHeight * 0.1; // 20% of the screen height


export default StyleSheet.create({
    container: {
        marginTop: 6,
        gap: 10
    },
    fastCell: {
        backgroundColor: OCColor.black10,
        height: '100%',
        flexDirection: 'row',
        fontFamily: OCFont.times,
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    dayTitleCell: {
        paddingTop: 16

    },
    fastCellImage: {
    },
    fastCellText: {
        fontFamily: OCFont.times,
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
        fontFamily: OCFont.times,
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
        backgroundColor: OCColor.black10,
        borderWidth: 1
    },
    aboutTitle: {
        fontFamily: OCFont.times,
        fontSize: 21,
        padding: 4
    },
    aboutBody: {
        fontFamily: OCFont.times,
        textAlign: 'justify',
        fontSize: 17,
        padding: 4
    },
    saintBody: {
        fontFamily: OCFont.times,
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
        backgroundColor: OCColor.black10,
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
        backgroundColor: OCColor.black10,
        borderWidth: 1 ,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    fastTitleCellBottom: {
        width: '100%',
        flex: 1,
        backgroundColor: OCColor.black10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    fastLabel: {
        fontFamily: OCFont.times,
        fontSize: 18,
        paddingHorizontal: 8,
        
    },
    scrollView: {
        // flexGrow: 1,
        // showsVerticalScrollIndicator: false
    },
    holidayIconContainer: {
        backgroundColor: OCColor.black10,
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