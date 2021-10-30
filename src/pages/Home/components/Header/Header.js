import React from "react";
import {Text, View} from "react-native";
import {Icon} from "react-native-elements";
import styles from './styles';

function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Today</Text>
            <Icon
                name="bars"
                type="font-awesome"
                color='#2D55EA'
                onPress={() => console.log("hello")}
                containerStyle={styles.moreIcon}/>
        </View>
    );
}

export default Header;