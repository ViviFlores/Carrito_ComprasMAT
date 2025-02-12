import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../theme/commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponents } from '../../components/BodyComponents';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';
import { ModalCar } from './components/ModalCar';

//Definir la interface para arreglo productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//Definir la interface para arreglo carProducts
export interface CardProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //Definir arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 1.20, stock: 7, pathImage: 'https://hyzdistribuidora.com.ec/wp-content/uploads/2023/07/TERMINAMesa-de-trabajo-24.png' },
        { id: 3, name: 'Funda de papas', price: 2.00, stock: 0, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 1.00, stock: 9, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.80, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31181_G.jpg' },
        { id: 6, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 7, name: 'Funda de azucar', price: 1.20, stock: 7, pathImage: 'https://hyzdistribuidora.com.ec/wp-content/uploads/2023/07/TERMINAMesa-de-trabajo-24.png' },
        { id: 8, name: 'Funda de papas', price: 2.00, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 9, name: 'Funda de fideos', price: 1.00, stock: 9, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 10, name: 'Funda de sal', price: 0.80, stock: 8, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/31181_G.jpg' }
    ]

    //hook useState: permitir manejar el estado del stock 
    const [productsState, setProductsState] = useState<Product[]>(products);
    //hook usuState: permitir gestionar los productor del carrito
    const [carProducts, setCarProducts] = useState<CardProduct[]>([]);
    //hook useState: permitir gestionar la visibilidad del modal
    const [showModalCar, setShowModalCar] = useState<boolean>(false)


    //Función para controlar el stock
    const handleChangeStock = (id: number, quantity: number): void => { //3
        const updateStock = productsState.map(product => product.id === id
            ? { ...product, stock: product.stock - quantity } //5 -2 = 3
            : product);
        //Modificar el arreglo en productsState
        setProductsState(updateStock);
        //Llamar función para agregar al carrito
        addProductCar(id, quantity);
    }

    //Función para agregar al carrito
    const addProductCar = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id === id);

        //Producto no existe
        if (!product) return;

        //Crear producto para el carrito
        const newProduct: CardProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //Agregar en el arreglo de carProducts
        setCarProducts([...carProducts, newProduct])
        //console.log(carProducts);
    }

    return (
        <View>
            <View>
                <StatusBar backgroundColor={PRIMARY_COLOR} />
                <View style={styles.headerProducts}>
                    <TitleComponent title='Productos' />
                    <View style={{
                        ...styles.containerIcon,
                        paddingHorizontal: 30
                    }}>
                        <Text style={styles.textIconCar}>
                            {carProducts.length}
                        </Text>
                        <Icon name='shopping-cart'
                            size={28}
                            color={SECONDARY_COLOR}
                            onPress={() => setShowModalCar(!showModalCar)} />
                    </View>
                </View>
                <BodyComponents>
                    <FlatList
                        data={productsState}
                        renderItem={({ item }) => <CardProduct product={item} handleChangeStock={handleChangeStock} />}
                        keyExtractor={item => item.id.toString()} />
                </BodyComponents>
            </View>
            <ModalCar isVisible={showModalCar}
                carProducts={carProducts}
                setShowModalCar={() => setShowModalCar(!showModalCar)} />
        </View>
    )
}
