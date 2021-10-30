import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";


function ListItems() {
    return (
        <View style={styles.listItemsContainer}>
            <Text style={styles.listItemsTitle}>Lists</Text>
            <TouchableOpacity style={styles.listItemContainer} onPress={() => console.log("hello")}>
                <Text style={styles.listItemTitle}>Inbox</Text>
                <Text style={styles.listItemDesc}>1 task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemContainer} onPress={() => console.log("hello")}>
                <Text style={styles.listItemTitle}>Inbox</Text>
                <Text style={styles.listItemDesc}>1 task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemContainer} onPress={() => console.log("hello")}>
                <Text style={styles.listItemTitle}>Inbox</Text>
                <Text style={styles.listItemDesc}>1 task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemContainer} onPress={() => console.log("hello")}>
                <Text style={styles.listItemTitle}>Inbox</Text>
                <Text style={styles.listItemDesc}>1 task</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ListItems;
