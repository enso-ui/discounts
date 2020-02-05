import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./generals', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'generals',
    component: RouterView,
    meta: {
        breadcrumb: 'general',
        route: 'discounts.clients.index',
    },
    children: routes,
};
