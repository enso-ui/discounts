import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./serviceDiscounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'serviceDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'service',
        route: 'discounts.suppliers.generalDiscounts.index',
    },
    children: routes,
};