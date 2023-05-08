import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements'
import styles from './styles';

function Menu() {



    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuTask}>
                <Icon
                    name="checkmark-circle-outline"
                    type="ionicon"
                    size={23}
                    color="#2D55EA"
                />
                <Text style={styles.menuText}>Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuList}>
                <Icon
                    name="list-outline"
                    type="ionicon"
                    size={23}
                    color="#2D55EA"
                />
                <Text style={styles.menuText}>List</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Menu;