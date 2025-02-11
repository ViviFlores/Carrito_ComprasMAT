import React from 'react';
import { Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';

//Definir interface para las propiedades del componente
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
}


export const ModalProduct = ({ product, isVisible, setShowModalProduct }: Props) => {
    //hook useDimensions para obtener las dimensiones de la pantalla
    const { width } = useWindowDimensions();
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text>{product.name}</Text>
                        <View style={styles.containerIcon}>
                            <Icon
                                name='cancel'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={setShowModalProduct} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
