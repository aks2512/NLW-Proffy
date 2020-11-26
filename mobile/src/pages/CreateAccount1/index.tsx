import  React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const CreateAccount1: React.FC = () => {
    const { navigate } = useNavigation();

    function handleNavigateToCreateAccount2() {
        navigate('CreateAccount2');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.title}>Crie sua{'\n'}conta gratuíta</Text>
                <Text style={styles.subtitle}>Basta preencher esses dados{'\n'}e você estará conosco.</Text>
            </View>

            <View style={styles.group1}>
                <Text style={styles.whoYouWhere}>01.  Quem é você?</Text>
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
            <RectButton style={styles.btnNext} onPress={handleNavigateToCreateAccount2}>
                <Text style={styles.textBtnNext}>Próximo</Text>
            </RectButton>
        </ScrollView>
    );
};

export default CreateAccount1;