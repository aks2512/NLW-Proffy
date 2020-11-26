import  React, { useState } from 'react';
import { View, Image, Text, ImageBackground, CheckBox, Button } from 'react-native';
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../../assets/splash.png';
import background from '../../assets/images/background.png'

import styles from './styles';

const SignIn: React.FC = () => {
    const [isSelected, setSelection] = useState(false);
    const { navigate } = useNavigation();
    const { signIn} = useAuth();

    function handleSignIn() {
        signIn();
    }

    function handleNavigateToCreateAccount() {
        navigate('CreateAccount');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <ImageBackground 
                    resizeMode="contain"
                    source={background} 
                    style={styles.imgBackground}
                >         
                    <Image style={styles.logo} source={logoImg} />
    <Text style={styles.title}>Sua plataforma de{'\n'}estudos online</Text>
                </ImageBackground>
                <Button title="Sign In" onPress={handleSignIn} />
            </View>

            <View style={styles.group1}>
                <Text style={styles.makeLogin}>Fazer login</Text>
                <Text style={styles.createAccount} onPress={handleNavigateToCreateAccount}>Criar uma conta</Text>
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="E-mail"
                    placeholderTextColor="#9C98A6"
                />
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Senha"
                    placeholderTextColor="#9C98A6"
                />
            </View>
            <View style={styles.group2}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.rememberMe}>Lembrar-me</Text>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </View>
            <RectButton style={styles.btnLogIn}>
                <Text style={styles.textBtnLogIn}>Entrar</Text>
            </RectButton>
        </ScrollView>
    );
};

export default SignIn;