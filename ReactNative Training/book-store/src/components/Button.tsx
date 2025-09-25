import { TouchableOpacity, StyleSheet, Text } from "react-native"

type props = {
    onPress : () => void
}

// save button component
const Button:React.FC<props> = ({onPress}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container :{
        width : "95%",
        backgroundColor : "#186660ff",
        alignItems :"center",
        justifyContent :"center",
        borderRadius : 10,
        alignSelf :"center",
        padding : 10,
        marginTop : 20
    },
    buttonText :{
        fontSize : 20,
        fontWeight : "bold",
        color :"white"
    }
})