import React, { useState } from 'react';
import { Alert, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/appTheme';
import { TitleComponent } from '../components/TitleComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//Definir interface para las propiedades
interface Props {
    users: User[];
}

//Definir interface estructura formulario (objeto)
interface LoginForm {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState: permite manejar el estado del formulario
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    });

    //hook useState: permite manejar el estado del password
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();

    //Función para manejar la captura y cambio de los campos del formulario
    const handleChange = (name: string, value: string): void => {
        //console.log(name, value);
        //Modificar la data del loginForm
        setLoginForm({ ...loginForm, [name]: value });
    }

    //Función para validar si existe el usuario
    const verifyUser = (): User | undefined => {
        //Buscar si el usuario existe en el arreglo users
        const existUser = users.find(user => user.email === loginForm.email && user.password === loginForm.password);
        return existUser;
    }

    //Función para validar la iniciar sesión
    const handleLogin = (): void => {
        //Verificar si el formulario está lleno
        if (loginForm.email === '' || loginForm.password === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        //Verificar si el usuario no existe
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        }

        //Navegar al screen home
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
        //console.log(loginForm);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión Editado' />
            <BodyComponents>
                <Text style={styles.titlePrincipal}>
                    Bienvenido de nuevo
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChange={handleChange}
                        name='email' />
                    <InputComponent placeholder='Contraseña'
                        handleChange={handleChange}
                        name='password'
                        isPassword={hiddenPassword} />
                    <Icon name={
                        (hiddenPassword)
                            ? 'visibility'
                            : 'visibility-off'
                    }
                        color={PRIMARY_COLOR}
                        size={20}
                        onPress={() => setHiddenPassword(!hiddenPassword)}
                        style={styles.iconPassword}
                    />
                </View>
                <ButtonComponent title='Iniciar' handleSendInfo={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirect}>No tienes una cuenta? Regístrate aquí</Text>
                </TouchableOpacity>
            </BodyComponents>
        </View>
    )
}
