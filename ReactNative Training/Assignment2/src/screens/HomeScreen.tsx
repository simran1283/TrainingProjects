import { View, StyleSheet, Text, FlatList } from "react-native"
import { s, vs } from "react-native-size-matters"
import TopTabs from "../components/TopTabs"
import DataCard from "../components/DataCard"
import { dummyData } from "../data/data"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Welcome User !!</Text>
            <TopTabs />
            <FlatList
                data={dummyData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <DataCard data={item} />}
                showsVerticalScrollIndicator = {false}
                numColumns={2} 
                columnWrapperStyle = {{
                    marginBottom : vs(5),
                    justifyContent : "space-between"
                }}
                contentContainerStyle={{
                    paddingBottom : s(20),
                    paddingTop : s(15)
                }}/>
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: s(40),
        margin: s(5),
        padding: s(10)
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "semibold"
    }
})