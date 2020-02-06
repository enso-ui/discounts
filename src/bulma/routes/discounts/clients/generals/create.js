const ClientDiscountCreate = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/generals/Create.vue');

export default {
    name: 'discounts.clients.generals.create',
    path: 'create',
    component: ClientDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create General Discount',
    },
};
