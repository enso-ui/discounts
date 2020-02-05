const ClientServiceDiscountCreate = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/services/Create.vue');

export default {
    name: 'discounts.clients.services.create',
    path: 'create',
    component: ClientServiceDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Client Service Discount',
    },
};
