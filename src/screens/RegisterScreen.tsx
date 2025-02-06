import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//Definir interface para las propiedades
interface Props {
    users: User[];
    addUsers: (user: User) => void;
}

//Definir interface estructura formulario (objeto)
interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

export const RegisterScreen = ({ users, addUsers }: Props) => {
    //hook useState: permite manejar el estado del formulario
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        email: '',
        password: ''
    });

    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();

    //Función para manejar la captura y cambio de los campos del formulario
    const handleChange = (name: string, value: string) => {
        //console.log(name, value);
        //Modificar la data del registerForm
        setRegisterForm({ ...registerForm, [name]: value });
    }

    //Función para validar si el usuario ya existe
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === registerForm.email);
        return existUser
    }

    //Función para registrarme
    const handleRegister = () => {
        //Validar si el formulario está lleno
        if (registerForm.name === '' || registerForm.email === '' || registerForm.password === '') {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        //Validar si el usuario ya existe
        if (verifyUser()) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        console.log(registerForm);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Regístrate' />
            <BodyComponents>
                <Text style={styles.titlePrincipal}>
                    Estás muy cerca
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Nombre'
                        handleChange={handleChange}
                        name='name' />
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChange={handleChange}
                        name='email' />
                    <InputComponent placeholder='Contraseña'
                        handleChange={handleChange}
                        name='password' />
                </View>
                <ButtonComponent title='Registrar' handleSendInfo={handleRegister} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Inicia Sesión aquí</Text>
                </TouchableOpacity>
            </BodyComponents>
        </View>
    )
}
