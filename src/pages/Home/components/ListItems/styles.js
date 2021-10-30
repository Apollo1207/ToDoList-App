import {StyleSheet} from "react-native";

export default StyleSheet.create({
    listItemsContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: "column",
        marginTop: "50px",
        marginLeft: "50px"
    },
    listItemsTitle: {
        fontSize: "16px",
        lineHeight: "19px",
        color: "#252A31",
        marginBottom: "15px",
        fontWeight: 600,
    },
    listItemContainer: {
        flexDirection: "column",
        backgroundColor: "#AAACB0",
        borderRadius: "10px",
        paddingTop: "10px",
        paddingBottom:"10px",
        paddingLeft: "15px",
        paddingRight:"220px",
        marginBottom: "5px",
    },
    listItemTitle: {
        fontSize: "19px",
        lineHeight: "23px",
        color: "#252A31",
        fontWeight: 600,
    },
    listItemDesc: {
        fontSize: "14px",
        lineHeight: "17px",
        color: "#252A31",
        marginTop: "5px",
    },
})