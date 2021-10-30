import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import RoundCheckbox from "react-native-round-checkbox";
import styles from "./styles";


function TaskItems() {
    const [isSelected, setIsSelected] = useState(false);
    return (
       <View style={styles.taskItemsContainer}>
            <TouchableOpacity style={styles.taskItemContainer} onPress={() => setIsSelected(!isSelected)}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#2D55EA'}
                    backgroundColor={"#2D55EA"}
                    iconColor={'#FFF'}
                    checked={isSelected}
                />
                <Text style={styles.checkboxText}>Start making a presentation</Text>
                <View
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: 13,
                        backgroundColor: "red",
                        marginBottom: 6,
                        marginRight: 10,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.taskItemContainer} onPress={() => setIsSelected(!isSelected)}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#2D55EA'}
                    backgroundColor={"#2D55EA"}
                    iconColor={'#FFF'}
                    checked={isSelected}
                />
                <Text style={styles.checkboxText}>Start making a presentation</Text>
                <View
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: 13,
                        backgroundColor: "red",
                        marginBottom: 6,
                        marginRight: 10,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.taskItemContainer} onPress={() => setIsSelected(!isSelected)}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#2D55EA'}
                    backgroundColor={"#2D55EA"}
                    iconColor={'#FFF'}
                    checked={isSelected}
                />
                <Text style={styles.checkboxText}>Start making a presentation</Text>
                <View
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: 13,
                        backgroundColor: "red",
                        marginBottom: 6,
                        marginRight: 10,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.taskItemContainer} onPress={() => setIsSelected(!isSelected)}>
                <RoundCheckbox
                    size={20}
                    borderColor={'#2D55EA'}
                    backgroundColor={"#2D55EA"}
                    iconColor={'#FFF'}
                    checked={isSelected}
                />
                <Text style={styles.checkboxText}>Start making a presentation</Text>
                <View
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: 13,
                        backgroundColor: "red",
                        marginBottom: 6,
                        marginRight: 10,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default TaskItems;
