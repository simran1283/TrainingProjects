import { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import {s, vs} from "react-native-size-matters"

const TopTabs = () => {

    const [activeTab,setActiveTab] = useState("Live")

    const tabData = ["Live", "Recorded"]

    return (
        <View style={styles.container}>
            {tabData.map((tabName) => (
                <TouchableOpacity style={[styles.innerContainer, activeTab === tabName && {backgroundColor : "#28779fff"}]} onPress={()=> setActiveTab(tabName)} key={tabName}>
                    <Text style={[styles.tabName, activeTab === tabName ? styles.activeTab : styles.inactiveTab]}>{tabName}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default TopTabs

const styles = StyleSheet.create({
    container: {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-evenly",
        backgroundColor : "#e6e5e5ff",
        marginTop : s(15),
        borderRadius : s(10)
    },
    innerContainer: {
       flex : 1,
       alignItems : "center",
       justifyContent : "center",
       padding : s(8),
       borderRadius : s(10)
    },
    tabName : {
        fontSize : s(15),
    },
    activeTab: {
        fontWeight : "bold",
        color : "white"
    },
    inactiveTab :{
        fontWeight : "semibold",
        color :"black"
    }
})