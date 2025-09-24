import { View, ImageBackground, StyleSheet, Text } from "react-native"
import { s, vs } from "react-native-size-matters"

const DataCard  = ({data}) =>{

    const imageURL = data.image
    const title = data.title
    const date = data.date
    return (
            <ImageBackground
            source= {{uri : imageURL}}
            style={styles.imageContainer} imageStyle={styles.imageStyle}>
                <View style={styles.overlay}></View>
                <View style={styles.Cardheading}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{date}</Text>
                </View>
            </ImageBackground>
            
    )
}

export default DataCard

const styles = StyleSheet.create({
    imageContainer : {
        height : vs(150),
        width : s(150),
        borderRadius : s(10),
        overflow : "hidden",
        marginHorizontal : s(5),
        marginTop : s(8)
    },
    imageStyle : {
        height : "100%",
        width : "100%",
        opacity : 0.7,
        borderRadius : s(10),
        resizeMode : "cover"
    },
    overlay : {
        ...StyleSheet.absoluteFillObject,
        backgroundColor : "rgba(0,0,0,0.15)"
    },
    Cardheading :{
        position : "absolute",
        left : s(10),
        bottom : s(10),
    },
    title :{
        color : "white",
        fontWeight : "bold",
        fontSize : 20
    },
    subtitle :{
        color : "white",
        fontWeight : "semibold",
        fontSize :10
    }
})