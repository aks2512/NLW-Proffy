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
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 32,
        marginLeft: -90
    },

    subtitle: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 14,
        marginLeft: -120
    },

    group1: {
        flexDirection: 'row',
        marginLeft: 25,
        alignItems: 'center',
        marginTop: 55
    },

    whoYouWhere: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 24,
    },

    inputGroup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },

    inputName: {
        width: 311,
        height: 64,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginBottom: 1,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },

    inputLastName: {
        width: 311,
        height: 64,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },

    btnNext: {
        backgroundColor: '#DCDCE5',
        width: 311,
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 20
    },

    textBtnNext: {
        fontFamily: 'Archivo_600SemiBold',
        fontSize: 16,
        color: '#9C98A6'
    }

});

export default styles;