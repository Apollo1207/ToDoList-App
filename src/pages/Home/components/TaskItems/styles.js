import {StyleSheet} from "react-native";

export default StyleSheet.create({
    taskItemsContainer: {
        marginTop: 5,
    },
    taskItemContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-evenly",
        height: "50px",
        paddingBottom: "15px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderBottomColor: "rgba(37, 42, 49, 0.1)",
        borderBottomWidth: 1,
    },
    checkboxText: {
        fontSize: "18px",
        lineHeight: "21px",
    },
})