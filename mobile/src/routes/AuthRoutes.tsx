import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import CreateAccount1 from '../pages/CreateAccount1';
import CreateAccount2 from '../pages/CreateAccount2';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount1" component={CreateAccount1} />
      <AuthStack.Screen name="CreateAccount2" component={CreateAccount2} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
