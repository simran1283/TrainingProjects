import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal, Pressable } from "react-native"
import { s, vs } from "react-native-size-matters"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import MessageModal from "./Modal";

const SocialSection = ({ title, icon }) => {

      const [modalVisible,setModalVisible] = useState(false)

      const openModal = () =>{
        setModalVisible(true)
      }

      const closeModal = () =>{
        setModalVisible(false)
      }

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                {icon}
            </View>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
                <MessageModal Visible={modalVisible} onClose={closeModal} title={title}/>
            <FontAwesome name="send" size={20} color="black" />
            </TouchableOpacity>
        </View>

    )
}

export default SocialSection


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: s(10),
        borderRadius: s(12),
        borderColor: "#e8d9d9ff",
        borderBottomWidth: 1
    },
    text: {
        fontSize: 20
    },
    circle: {
        height: s(46),
        width: s(46),
        borderRadius: s(23),
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#e8d9d9ff"
    },
     buttonContainer : {
        height : s(46),
        width : s(46),
        borderRadius : s(23),
        backgroundColor : "#a8cae7ff",
        alignItems : "center",
        justifyContent : "center"
    }
});
