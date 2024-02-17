import { StyleSheet } from "react-native";
import OCFont from "../../styles/OCFont";
import OCColor from "../../styles/OCColor";


export default StyleSheet.create({
  container: {
    flexDirection: "column",
    alignContent: "space-between",
    paddingBottom: 16, // Add paddingBottom to create space between elements
    gap: 8
  },
  cell: {
    marginTop: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: OCColor.black10,
    borderWidth: 1
  },
  switchCell: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: OCColor.black10,
    borderWidth: 1,
  },
  switchTitle: {
    padding: 4,
    fontSize: 18,
    fontFamily: OCFont.times
  },
  aboutTitle: {
    fontFamily: OCFont.times,
    fontSize: 21,
    padding: 4,
  },
  aboutBody: {
    fontFamily: OCFont.times,
    textAlign: "justify",
    fontSize: 16,
    padding: 4,
    paddingBottom: 8,
  },
});
