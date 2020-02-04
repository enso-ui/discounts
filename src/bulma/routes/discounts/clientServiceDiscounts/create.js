const ClientServiceDiscountCreate = () => import('../../../pages/discounts/clientServiceDiscounts/Create.vue');

export default {
    name: 'discounts.clientServiceDiscounts.create',
    path: 'create',
    component: ClientServiceDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Client Service Discount',
    },
};
