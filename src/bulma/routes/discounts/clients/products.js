import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./products', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'products',
    component: RouterView,
    meta: {
        breadcrumb: 'product',
        route: 'discounts.clients.index',
    },
    children: routes,
};
