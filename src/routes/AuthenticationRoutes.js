import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const NotFound = Loadable(lazy(() => import('layout/notFound/NotFound')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = [
    {
        path: '/',
        element: <AuthLogin3 />
    },
    {
        path: '/register',
        element: <AuthRegister3 />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default AuthenticationRoutes;
