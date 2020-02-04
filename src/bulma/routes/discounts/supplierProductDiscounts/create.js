const SupplierProductDiscountCreate = () => import('../../../pages/discounts/supplierProductDiscounts/Create.vue');

export default {
    name: 'discounts.supplierProductDiscounts.create',
    path: 'create',
    component: SupplierProductDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Supplier Product Discount',
    },
};
