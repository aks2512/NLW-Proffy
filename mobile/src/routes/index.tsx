import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import { useAuth } from '../contexts/auth';

import AppStack from './AppStack';
import AuthRoutes from './AuthRoutes';


const Routes: React.FC = () => {
    const { signed } = useAuth();

    return signed ? <AppStack/> : <AuthRoutes />;
};

export default Routes;