import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "./commons/constants";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingTop: 40
    },
    title: {
        color: SECONDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    textDescription: {
        fontSize: 15,
        color: TERTIARY_COLOR,
        marginTop: 7
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 10,
        marginVertical: 7,
    },
    containerForm: {
        marginVertical: 20
    },
    buttonForm: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonFormText: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    iconPassword: {
        position: 'absolute',
        right: 10,
        bottom: 17
    },
    textRedirect: {
        color: PRIMARY_COLOR,
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderStyle: 'solid',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2,
        marginBottom: 15
    },
    titleCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    imageCard: {
        width: 70,
        height: 70,
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalProduct: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 10
    },
    titleHeaderModal: {
        fontSize: 17,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    imageModal: {
        width: 180,
        height: 180
    },
    containerQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonQuantity: {
        backgroundColor: PRIMARY_COLOR,
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 15,
        color: TERTIARY_COLOR,
        fontWeight: 'bold'
    },
    buttonAddCart: {
        backgroundColor: PRIMARY_COLOR,
        marginTop: 15,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5
    },
    buttonAddCartText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#801f1f',
        textAlign: 'center'
    },
    headerProducts: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textIconCar: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 'bold',
    },
    headerTableCar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeaderTable: {
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    containerTotal: {
        alignItems: 'flex-end',
        marginVertical: 15
    },
    textTotal: {
        fontWeight: 'bold',
        paddingHorizontal: 10,
        fontSize: 18
    }
})