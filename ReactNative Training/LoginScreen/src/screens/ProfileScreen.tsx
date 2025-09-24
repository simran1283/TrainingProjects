import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigations/type";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

// width of whole screen
const { width } = Dimensions.get('window');

// type ProfileScreenNavigationProp = RouteProp<RootStackParamList,'Profile'>
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,"Login">
const ProfileScreen = () => {

    const [name,setName] = useState("")

    //user name from login screen
    // const route = useRoute<ProfileScreenNavigationProp>()

    const navigation = useNavigation<ProfileScreenNavigationProp>()
    
          useEffect(() => {
           const fetchData = async()=>{
                await getUserDetails()
            }
            fetchData()
          }, [])
    
    
        const getUserDetails = async () => {
            try {
                const data = await SecureStore.getItemAsync('user_details');
                if (data) {
                    const user = JSON.parse(data);
                    if(user)
                        setName(user.name)
                }
                return null;
            } catch (err) {
                console.error('Error retrieving user details', err);
                return null;
            }
        };


        const removeUserDetails = async()=>{
            try{
                await SecureStore.deleteItemAsync("user_details")
                console.log("Key removed successfully")
                navigation.navigate("Login")
            }
            catch(err){
                console.log("Error : ",err)
            }
        }

    //user stats static data
    const stats = [
        { key: "followers", label: "Followers", value: "12K" },
        { key: "following", label: "Following", value: "250" },
        { key: "socialScore", label: "Social Score", value: "8.5" }
    ]

    return (

        // parent container
        <View style={styles.container}>

            {/* top section */}
            <View style={styles.topSection} />

            {/* bottom Section */}
            <View style={styles.bottomSection}>

                {/* display user name */}
                <Text style={styles.userName}>{name}</Text>

                {/* About section */}
                <Text style={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit dolores corporis iste quidem, laborum.</Text>

                {/* follow Button */}
                <TouchableOpacity
                    style={styles.followButton}
                    activeOpacity={0.8}
                    onPress={() => Alert.alert("Following")}
                >
                    <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>

                {/* Logout Button */}
                <TouchableOpacity
                    style={styles.logoutButton}
                    activeOpacity={0.8}
                    onPress={() => removeUserDetails()
                    }
                >
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>

                {/* User Stats */}

                <View style={styles.statRow}>
                    {stats.map((statItem) => (
                        <View key={statItem.key} style={styles.stat}>
                            <Text style={styles.statNumber}>{statItem.value}</Text>
                            <Text style={styles.statLabel}>{statItem.label}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* profile picture container */}
            <View style={styles.profilePicContainer}>
                {/* profile Picture */}
                <Image
                    source={require("../../assets/user.png")}
                    style={styles.profilePic}
                    resizeMode="cover" />
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        flex: .2,
        backgroundColor: "#263238"
    },
    bottomSection: {
        flex: .8,
        backgroundColor: "white",
        paddingTop: "14%",
        paddingHorizontal: "5%",
        alignItems: "center",
    },
    userName: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "2%",
        marginBottom: "4%"
    },
    about : {
        textAlign : "center"
    },
    followButton: {
        paddingVertical: 10,
        paddingHorizontal: "6%",
        borderRadius: 112,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 6,
        backgroundColor: "#81C784"
    },
    followButtonText: {
        fontSize: 20,
        color: "#263238"
    },
    statRow : {
        flex : 1,
        flexDirection : "row",
        width : "100%",
        justifyContent : "space-between",
        marginTop : "10%",
    },
    stat :{
        flex: 1,
        alignItems : "center"
    },
    statNumber :{
        fontSize : 20,
        fontWeight : "bold"
    },
    statLabel :{
        fontSize : 18,
        fontStyle : "italic",
    },
    profilePicContainer: {
        position: "absolute",
        top: "11%",
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: "white",
        backgroundColor: "white",
        left: (width - 120) / 2,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    profilePic: {
        width: 120,
        height: 120
    },
    logoutButtonText: {
        fontSize: 20,
        color: "#fff"
    },
    logoutButton: {
        paddingVertical: 10,
        paddingHorizontal: "6%",
        borderRadius: 112,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 6,
        backgroundColor: "#263238"
    },
})