import React from 'react';
import { Modal, Text, View } from 'react-native';

export const ModalCar = () => {
    return (
        <Modal visible={true} animationType='fade' transparent={true}>
            <View>
                <Text>Modal Car</Text>
            </View>
        </Modal>
    )
}
