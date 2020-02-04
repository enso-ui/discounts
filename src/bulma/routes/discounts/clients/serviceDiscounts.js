import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./serviceDiscounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'serviceDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'service',
        route: 'discounts.clients.serviceDiscounts.index',
    },
    children: routes,
};
