import { StyleSheet } from "react-native";

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
    backgroundColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
  },
  switchCell: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
  },
  switchTitle: {
    padding: 4,
    fontSize: 18,
    fontFamily: "TimesNewRoman"
  },
  aboutTitle: {
    fontFamily: "TimesNewRoman",
    fontSize: 21,
    padding: 4,
  },
  aboutBody: {
    fontFamily: "TimesNewRoman",
    textAlign: "justify",
    fontSize: 16,
    padding: 4,
    paddingBottom: 8,
  },
});
