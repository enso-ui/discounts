const ClientServiceDiscountCreate = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/serviceDiscounts/Create.vue');

export default {
    name: 'discounts.clients.serviceDiscounts.create',
    path: 'create',
    component: ClientServiceDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Client Service Discount',
    },
};
