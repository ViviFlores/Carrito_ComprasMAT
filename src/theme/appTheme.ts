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
        padding: 15,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderStyle: 'solid',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2,
        marginBottom:15
    },
    titleCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: TERTIARY_COLOR
    },
    imageCard: {
        width: 60,
        height: 60,
    }
})