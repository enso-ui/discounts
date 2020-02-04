import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./generalDiscounts', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'generalDiscounts',
    component: RouterView,
    meta: {
        breadcrumb: 'general',
        route: 'discounts.suppliers.generalDiscounts.index',
    },
    children: routes,
};
