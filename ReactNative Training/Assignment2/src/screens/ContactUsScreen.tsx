import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import { vs, s } from "react-native-size-matters"
import Entypo from '@expo/vector-icons/Entypo';
import SocialSection from "../components/socialSection";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.backBtn} onPress={()=>Alert.alert("Back Button Pressed")}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: "https://miro.medium.com/v2/resize:fit:512/1*7tlP1ph61ompULJdycVJlQ.png" }} style={styles.userLogo}></Image>
      </View>
      <View style={styles.socialContainer}>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.subheading}>Social Media Platforms</Text>
        <SocialSection title={"Whatsapp"} icon={<FontAwesome name="whatsapp" size={24} color="black" />}/>
        <SocialSection title={"Twitter"} icon={<Entypo name="twitter" size={24} color="black" />}/>
        <SocialSection title={"Instagram"} icon={<Entypo name="instagram" size={24} color="black" />}/>
        <SocialSection title={"Snapchat"} icon={<FontAwesome name="snapchat-ghost" size={24} color="black" />}/>
        <SocialSection title={"TikTok"} icon={<Ionicons name="logo-tiktok" size={24} color="black" />}/>
      </View>
    </View>
  )
}

export default ContactUsScreen

const styles = StyleSheet.create({
  userLogo: {
    height: s(32),
    width: s(32),
    borderRadius: s(16)
  },
  backBtn: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    backgroundColor: "#a8cfddff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    marginTop : vs(35)
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: s(16),
  
},
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  subheading: {
    fontSize: 16,
    color: "gray",
    fontWeight : "semibold",
    marginVertical: 10
  },
  socialContainer: {
    flex: 1,
    borderRadius: s(24),
    borderBottomColor: "#dcdcdcff",
    backgroundColor: "#f7f4f4ff",
    marginVertical : s(20),
    paddingHorizontal: s(20),
    paddingVertical: s(15),
    marginHorizontal: s(15)
  }
})