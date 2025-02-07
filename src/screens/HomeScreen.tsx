import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponents } from '../components/BodyComponents';

export const HomeScreen = () => {
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Productos' />
            <BodyComponents />
        </View>
    )
}
