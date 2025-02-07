import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen';

//Definir interface estructura de mis objetos usuarios
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

//Definir arreglos con usuarios de prueba
const users: User[] = [
    { id: 1, name: 'Viviana Flores', email: 'vflores@gmail.com', password: '123456' },
    { id: 2, name: 'Ariel Ron', email: 'aron@gmail.com', password: '123456' }
]

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //hook useState: permitir controlar el estado de los usuarios 
    const [usersManager, setUsersManager] = useState<User[]>(users);

    //Función para agregar usuarios al arreglo usersManager
    const addUsers = (user: User): void => {
        //Agregar nuevos usuarios al usersManager
        setUsersManager([...usersManager, user]);
    }

    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScreen users={usersManager} />} />
            <Stack.Screen name="Register"
                options={{ headerShown: false }}
                children={() => <RegisterScreen users={usersManager} addUsers={addUsers} />} />
            <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}/>
        </Stack.Navigator>
    );
}