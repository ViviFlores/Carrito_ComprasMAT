import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { CardProduct } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    carProducts: CardProduct[];
    setShowModalCar: () => void;
}

export const ModalCar = ({ isVisible, carProducts, setShowModalCar }: Props) => {
    const { width } = useWindowDimensions();

    //Función para calcular el total de la compra
    const totalPay = (): number => {
        //acumulador
        let total: number = 0;
        carProducts.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleHeaderModal}>
                            Mis Productos
                        </Text>
                        <View style={styles.containerIcon}>
                            <Icon
                                name='cancel'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={setShowModalCar} />
                        </View>
                    </View>
                    <View style={styles.headerTableCar}>
                        <Text style={styles.textHeaderTable}>Producto</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                ...styles.textHeaderTable,
                                marginHorizontal: 10
                            }}>Precio</Text>
                            <Text style={styles.textHeaderTable}>Cantidad</Text>
                            <Text style={{
                                ...styles.textHeaderTable,
                                marginHorizontal: 10
                            }}>Total</Text>
                        </View>
                    </View>
                    <FlatList
                        data={carProducts}
                        renderItem={({ item }) =>
                            <View style={styles.headerTableCar}>
                                <Text>{item.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ marginHorizontal: 10 }}>
                                        ${item.price.toFixed(2)}
                                    </Text>
                                    <Text style={{ paddingHorizontal: 25 }}>
                                        {item.quantity}
                                    </Text>
                                    <Text style={{ marginHorizontal: 10 }}>
                                        ${item.total.toFixed(2)}
                                    </Text>
                                </View>
                            </View>}
                        keyExtractor={item => item.id.toString()} />
                    <View style={styles.containerTotal}>
                        <Text style={styles.textTotal}>
                            Total pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonAddCart}>
                            <Text style={styles.buttonAddCartText}>Comprar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
