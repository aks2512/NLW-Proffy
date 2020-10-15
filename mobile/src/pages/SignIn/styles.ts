import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    banner: {
        width: 375,
        height: 379,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8257E5'
    },

    imgBackground: {
        width: '93%',
        height: '93%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 160,
        height: 46.75
    },

    title: {
        fontFamily: 'Archivo_400Regular',
        color: '#D4C2FF',
        marginLeft: -50
    },

    group1: {
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center',
        marginTop: 55
    },

    makeLogin: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 24,
    },

    createAccount: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#8257E5',
        marginLeft: 80
    },

    inputGroup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },

    inputEmail: {
        width: 311,
        height: 64,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginBottom: 1,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },

    inputPassword: {
        width: 311,
        height: 64,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },

    group2: {
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },

    checkbox: {
        alignSelf: "center",
    },

    rememberMe: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6'
    },

    forgotPassword: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#9C98A6',
        marginLeft: 70
    },

    btnLogIn: {
        backgroundColor: '#04d361',
        width: 311,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20
    },

    textBtnLogIn: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        color: '#FFF'
    }

});

export default styles;