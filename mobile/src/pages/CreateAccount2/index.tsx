import  React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const CreateAccount2: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToSignIn() {
        navigate('SignIn');
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.group1}>
                <Text style={styles.whoYouWhere}>02.  Email e Senha</Text>
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.inputName}
                    placeholder="Nome"
                    placeholderTextColor="#9C98A6"
                />
                <TextInput
                    style={styles.inputLastName}
                    placeholder="Sobrenome"
                    placeholderTextColor="#9C98A6"
                />
            </View>
            <RectButton style={styles.btnNext} onPress={handleNavigateToSignIn}>
                <Text style={styles.textBtnNext}>Concluir Cadastro</Text>
            </RectButton>
        </ScrollView>
    );
};

export default CreateAccount2;