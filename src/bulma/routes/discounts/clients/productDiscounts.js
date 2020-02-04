import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./productDiscounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'productDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'product',
        route: 'discounts.clients.generalDiscounts.index',
    },
    children: routes,
};
