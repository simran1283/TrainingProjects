import { StyleSheet, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

//type declaration
type props  = {
    onPress : ()=> void
}

// button component to add a book
const AddButton : React.FC<props> = ({onPress}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container  : {
        height : 50,
        width : 50,
        borderRadius :25,
        backgroundColor : "#0d5b72ff",
        alignItems :"center",
        justifyContent :"center",
        alignSelf : "flex-end",
        marginRight : 20,
        margin : 20
    }
})