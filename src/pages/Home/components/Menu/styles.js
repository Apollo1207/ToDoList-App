import {StyleSheet} from "react-native";

export default StyleSheet.create({
    menuContainer: {
        position: "absolute",
        right: 15,
        bottom: 85,
        width: 200,
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    menuTask: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        width: 200,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomColor: "rgba(37, 42, 49, 0.1)",
        borderBottomWidth: 1,
    },
    menuList: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    menuText: {
        marginLeft: 10,
        color: "#006CFF",
        fontWeight: 500,
    },
})