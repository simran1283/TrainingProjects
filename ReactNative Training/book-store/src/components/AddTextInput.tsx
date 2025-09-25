import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native"

//type declaration
type props = {
    placeholder : string,
    value : string,
    onChangeText : (text : string) => void,
    keyboardType : KeyboardTypeOptions
}

const AddTextInput : React.FC<props> = ({placeholder,value,onChangeText,keyboardType}) =>{
    return(

        // text input component for book details

        <TextInput
        style={styles.container}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        ></TextInput>
    )
}

export default AddTextInput

const styles = StyleSheet.create({
    container :{
        width : "95%",
        borderRadius : 10,
        backgroundColor : "#eee",
        margin : 10,
        marginBottom : 20,
        padding : 10,
        alignItems :"center",
        justifyContent : "center",
        fontSize : 18,
        elevation : 2
    }
})