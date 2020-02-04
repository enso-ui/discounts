import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./supplierServiceDiscounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'supplierServiceDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'supplier',
        route: 'discounts.supplierDiscounts.index',
    },
    children: routes,
};
