import { LinearGradient } from "react-native-svg"
import Logo from "../../assets/Logo"
import { View, StyleSheet, Text } from "react-native"

const IntroScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo width={50} height={50}/>
            </View>
            <View style={styles.innerContainer}>
                <Text>from</Text>
                <Text style={styles.innerText}>FACEBOOK</Text>
            </View>
        </View>
    )
}

export default IntroScreen


const styles  = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : "space-between",
        alignItems : "center"
    },
    innerContainer : {
        position : "absolute",
        bottom : 30,
        width : "100%",
        alignItems : "center"

    },
    logo : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    innerText : {
        fontSize : 20,
        letterSpacing : 4,
        color : "#af1d5aff"
    }
})