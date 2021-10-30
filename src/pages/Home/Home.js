import React, {useState} from 'react';
import {View, TouchableOpacity} from "react-native";
import {Icon} from 'react-native-elements'
import Header from "./components/Header/Header";
import TaskItems from "./components/TaskItems/TaskItems";
import ListItems from "./components/ListItems/ListItems";
import Menu from "./components/Menu/Menu";
import styles from './styles';

function Home() {
    const [addData, setAddData] = useState(false);
    let plusButtonBackgroundColor = addData ? "#2D55EA" : "white";
    let plusButtonIconColor = addData ? "white" : "#2D55EA";
    let plusButtonRotateDegree = addData ? -45 : 0;
    return (
        <>
            <View style={addData ? styles.homeContainerOverlay : styles.homeContainerDefault}>
                <Header/>
                <TaskItems/>
                <ListItems/>
            </View>
            {addData ? <Menu/> : null}
            <TouchableOpacity
                onPress={() => setAddData(!addData)}
                style={{
                    position: "absolute",
                    right: 15,
                    bottom: 15,
                    width: 66,
                    height: 66,
                    borderRadius: 33,
                    backgroundColor: plusButtonBackgroundColor,
                    paddingTop: 16,
                    paddingLeft: 2,
                }}>
                <Icon
                    name="add-outline"
                    type="ionicon"
                    size={30}
                    color={plusButtonIconColor}
                    containerStyle={{
                        transform: [{
                            rotate: `${plusButtonRotateDegree}deg`,
                            transition: "1s ease",
                        }],
                    }}
                />
            </TouchableOpacity>
        </>
    );
}

export default Home;