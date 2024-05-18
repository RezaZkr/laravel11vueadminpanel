import authRoutes from 'auth/js/router/panel/routes.js';
import dashboardRoutes from 'dashboard/js/router/panel/routes.js';
import userRoutes from 'user/js/router/panel/routes.js';

const routes = [

    ...authRoutes,
    ...dashboardRoutes,
    ...userRoutes,
    
];

export default routes;
