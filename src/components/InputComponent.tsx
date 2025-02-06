import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;  //tipo de dato de teclado
    handleChange: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean; // true - encripte | false - texto plano
}

export const InputComponent = ({ placeholder, keyboardType = 'default', handleChange, name, isPassword = false }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChange(name, value)}
            secureTextEntry={isPassword}
            style={styles.inputText} />
    )
}
