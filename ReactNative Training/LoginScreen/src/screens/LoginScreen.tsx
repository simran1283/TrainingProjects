
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { vs, s } from "react-native-size-matters"
import { RootStackParamList } from "../Navigations/type"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import * as SecureStore from 'expo-secure-store';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {

    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    const saveUserDetails = async () => {
  try {
    await SecureStore.setItemAsync('user_details', JSON.stringify({name,password}));
    console.log('User details stored securely');
    navigation.navigate("Profile")
  } catch (err) {
    console.error('Error storing user details', err);
  }
};

    return (
        //whole screen
        <View style={styles.container}>

            <View style={styles.innerContainer}>

                {/* User icon */}
                <Image
                    source={require("../../assets/user.png")}
                    style={styles.userImage}></Image>

                {/* input fields */}
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} secureTextEntry value={password} onChangeText={setPassword}></TextInput>

                {/* forgot password */}
                <Text style={styles.forgotP} onPress={() => Alert.alert("Forgot Password Pressed")}>Forgot Password?</Text>

                {/* login button */}
                <TouchableOpacity
                    style={styles.loginButton}
                    activeOpacity={0.8}
                    // onPress={() => navigation.navigate("Profile",{userName : name})}
                    onPress={saveUserDetails}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                {/* signup  */}
                <Text style={styles.newuser}>
                    New User?{' '}
                    <Text style={styles.signup} onPress={() => Alert.alert('Sign Up pressed')}>
                        Sign Up
                    </Text>
                </Text>

            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#263238",
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "20%"
    },
    userImage: {
        height: vs(100),
        width: s(100),
        resizeMode: "center",
        marginBottom: 30
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 15,
        color: "#90A4AE",
        marginLeft: "12%",
        marginTop: '4%'
    },
    input: {
        width: "75%",
        borderBottomWidth: 2,
        borderBottomColor: "#90A4AE",
        marginVertical: 10,
        color: "white"
    },
    forgotP: {
        alignSelf: "flex-end",
        fontSize: 15,
        color: "#90A4AE",
        marginRight: "12%",
        marginVertical: '2%'
    },
    loginButton: {
        paddingVertical: 14,
        paddingHorizontal: "30%",
        borderRadius: 112,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 6,
        backgroundColor: "#81C784"
    },
    loginButtonText: {
        fontSize: 20,
        color: "#263238"
    },
    newuser: {
        fontSize: 15,
        color: "#90A4AE",
        fontWeight: "bold"
    },
    signup: {
        alignSelf: "center",
        fontSize: 15,
        color: "#A5D6A7"

    }
})