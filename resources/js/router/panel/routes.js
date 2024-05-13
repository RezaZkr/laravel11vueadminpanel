import authRoutes from '../../../../Modules/Auth/resources/js/router/panel/routes.js';
import dashboardRoutes from '../../../../Modules/Dashboard/resources/js/router/panel/routes.js';
import userRoutes from '../../../../Modules/User/resources/js/router/panel/routes.js';

const routes = [

    ...authRoutes,
    ...dashboardRoutes,
    ...userRoutes,
];

export default routes;
