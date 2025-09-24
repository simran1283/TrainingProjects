import { View, StyleSheet, Text,Modal, Pressable, Alert, TextInput } from "react-native"
import { useState } from "react"
import { s } from "react-native-size-matters"
const MessageModal = ({Visible,onClose,title}) =>{

    const [message,setMessage] = useState("")

    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={Visible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter Message</Text>
              <TextInput placeholder="Type your message here!" value={message} onChangeText={setMessage} style={styles.inputBox}></TextInput>
              <View style={styles.buttonContainer}>
                <Pressable
                style={styles.button}
                onPress={()=>{
                    console.log(message)
                    Alert.alert(`Message ${message} sent via ${title}`)
                    setTimeout(onClose,2000)
                    setMessage("")
                }}>
                <Text style={styles.textStyle}>Send</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={onClose}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
    )
}

export default MessageModal


const styles = StyleSheet.create({
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor : "#75c8e1ff",
    paddingHorizontal : 20,
    marginHorizontal : 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputBox :{
    height : "auto",
    width : s(150),
    borderWidth : 1,
    marginBottom : 10,
    borderRadius : 10
  },
  buttonContainer :{
    flexDirection: "row",
    alignItems : "center",
    justifyContent : "space-between"
  }
})