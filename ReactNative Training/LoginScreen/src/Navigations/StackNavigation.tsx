import LoginScreen from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList } from './type';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {

    const [initialRoute, setInitialRoute] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            await getUserDetails()
        }
        fetchData()
    }, [])




    const getUserDetails = async () => {
        try {
            const data = await SecureStore.getItemAsync('user_details');
            if (data) {
                const user = JSON.parse(data);
                if (user) {
                    setInitialRoute("Profile")
                } else {
                    setInitialRoute("Login")
                }
            } else {
                // No data means user not logged in
                setInitialRoute('Login');
            }
            return null;
        } catch (err) {
            console.error('Error retrieving user details', err);
            setInitialRoute("Login")
        }
    };


    if (!initialRoute) return null;

    return (

        <Stack.Navigator initialRouteName={initialRoute} id={undefined} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='Profile' component={ProfileScreen} options={{
                headerShown: true,
                title: "User Profile"
            }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigation