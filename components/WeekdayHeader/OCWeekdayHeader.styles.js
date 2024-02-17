import { StyleSheet } from "react-native";
import OCColor from "../../styles/OCColor";

export default StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 8,
        height: 24,
    },
    cell: {
        flex: 1, // use flex instead of width to evenly distribute
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    firstCell: {
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5
    },
    middleCell: {
        borderRightWidth: 0.5,
    },
    lastCell: {
        borderRightWidth: 0.5,
    },
    title: {
        fontFamily: 'TimesNewRoman'
    },
    sunday: {
        backgroundColor: OCColor.lightPink
    }
});
