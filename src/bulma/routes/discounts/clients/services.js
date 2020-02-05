import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./services', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'services',
    component: RouterView,
    meta: {
        breadcrumb: 'service',
        route: 'discounts.clients.index',
    },
    children: routes,
};
