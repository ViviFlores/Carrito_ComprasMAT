import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../theme/commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProduct } from './components/CardProduct';

//Definir la interface para arreglo productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //Definir arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 1.20, stock: 7, pathImage: 'https://hyzdistribuidora.com.ec/wp-content/uploads/2023/07/TERMINAMesa-de-trabajo-24.png' },
        { id: 3, name: 'Funda de papas', price: 2.00, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 9, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.80, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31181_G.jpg' },
        { id: 6, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 7, name: 'Funda de azucar', price: 1.20, stock: 7, pathImage: 'https://hyzdistribuidora.com.ec/wp-content/uploads/2023/07/TERMINAMesa-de-trabajo-24.png' },
        { id: 8, name: 'Funda de papas', price: 2.00, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 9, name: 'Funda de fideos', price: 1.00, stock: 9, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 10, name: 'Funda de sal', price: 0.80, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31181_G.jpg' }
    ]

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Productos' />
            <BodyComponents>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct product={item} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponents>
        </View>
    )
}
