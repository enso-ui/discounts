const ClientProductDiscountCreate = () => import('../../../../pages/discounts/clients/products/Create.vue');

export default {
    name: 'discounts.clients.products.create',
    path: 'create',
    component: ClientProductDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Client Product Discount',
    },
};
