const ClientProductDiscountCreate = () => import('../../../pages/discounts/clientProductDiscounts/Create.vue');

export default {
    name: 'discounts.clientProductDiscounts.create',
    path: 'create',
    component: ClientProductDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Client Product Discount',
    },
};
