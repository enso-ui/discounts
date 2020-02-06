const SupplierServiceDiscountCreate = () => import('../../../../pages/discounts/suppliers/services/Create.vue');

export default {
    name: 'discounts.suppliers.services.create',
    path: 'create',
    component: SupplierServiceDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Supplier Service Discount',
    },
};
