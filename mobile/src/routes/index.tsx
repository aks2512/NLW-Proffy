import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AppStack from './AppStack';
import AuthRoutes from './AuthRoutes';


const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <AppStack/> : <AuthRoutes />;
};

export default Routes;