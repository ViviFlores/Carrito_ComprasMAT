import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';

//Definir interface para las propiedades del componente
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
    handleChangeStock: (id: number, quantity: number) => void;
}


export const ModalProduct = ({ product, isVisible, setShowModalProduct, handleChangeStock }: Props) => {
    //hook useDimensions para obtener las dimensiones de la pantalla
    const { width } = useWindowDimensions();

    //hoot useState para manejar la cantidad de productos
    const [quantity, setQuantity] = useState<number>(1);

    //Función cerrar el modal y settear la cantidad a 1
    const closeModal = (): void => {
        setShowModalProduct();
        //Modificar el valor del contador
        setQuantity(1);
    }

    //Función para agregar al carrito
    const handleAddProduct = (): void => {
        //llamar función para actualizar stock
        handleChangeStock(product.id, quantity);
        //Cerrar el modal
        closeModal();
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
                            {product.name} - ${product.price.toFixed(2)}
                        </Text>
                        <View style={styles.containerIcon}>
                            <Icon
                                name='cancel'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={closeModal} />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: product.pathImage
                        }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (product.stock === 0)
                            ? <Text style={styles.textStock}>
                                Producto Agotado!
                            </Text>
                            :
                            <View>
                                <View style={styles.containerQuantity}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}>
                                        <Text style={styles.buttonQuantityText}>-1</Text>
                                    </TouchableOpacity>

                                    <Text style={styles.textQuantity}>
                                        {quantity}
                                    </Text>

                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity === product.stock}>
                                        <Text style={styles.buttonQuantityText}>+1</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>
                                        Total: $ {(product.price * quantity).toFixed(2)}
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.buttonAddCart}
                                        onPress={handleAddProduct}>
                                        <Text style={styles.buttonAddCartText}>
                                            Agregar Carrito
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
