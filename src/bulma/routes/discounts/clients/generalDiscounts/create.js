const ClientDiscountCreate = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/generalDiscounts/Create.vue');

export default {
    name: 'discounts.clients.generalDiscounts.create',
    path: 'create',
    component: ClientDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create General Discount',
    },
};
