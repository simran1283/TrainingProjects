import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

//type declaration
type props = {
    title : string,
    authorName : string,
    price : string,
    imageURI : string,
    onDeleteItem : () => void,
    onEditItem : () => void
}

//book cards component 
const BookCard:React.FC<props> = ({title,authorName,price,imageURI,onDeleteItem,onEditItem}) =>{
    return(
        // parent container
        <View style={styles.container}>

            {/* image section */}
            <Image source={{uri  : imageURI}} style={styles.image}></Image>

            {/* book details section */}
            <View style={styles.detailContainer}>
                <Text style={styles.bookName}>{title}</Text>
                <Text style={styles.authorName}>{authorName}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>

            {/* Delete and Edit Button Section */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onDeleteItem}>
                    <MaterialCommunityIcons name="delete-outline" size={24} color="#fa7272ff" />
                </TouchableOpacity>
                <TouchableOpacity style= {styles.button} onPress={onEditItem}>
                    <AntDesign name="edit" size={24} color="#397d89ff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default BookCard

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        elevation : 3,
        backgroundColor : "#fff",
        shadowColor : "#000",
        borderRadius : 10,
        padding : 4,
        margin : 10,
        shadowOpacity : .1,
        shadowOffset : {width : 0 , height : 2},
        shadowRadius : 4
    },
    image : {
        height : 130,
        width : 110,
        resizeMode : "cover",
        borderRadius : 10
    },
    detailContainer :{
        margin : 10,
        width : "25%"
    },
    bookName :{
        fontSize : 20,
        fontWeight : "bold"
    },
    authorName : {
        fontSize : 16,
        fontWeight : "semibold",
        color : "#747474ff",
        marginBottom : 4
    },
    price : {
        fontSize : 17,
        color : "#3e4bc2ff",
        fontWeight : "bold"
    },
    buttonContainer : {
        flexDirection : "row",
        alignItems : "center",
        marginStart : 30
    },
    button :{
        height : 50,
        width : 50,
        borderRadius : 25,
        backgroundColor : "#eee",
        marginStart : 10,
        alignItems : "center",
        justifyContent : "center"
    }
})