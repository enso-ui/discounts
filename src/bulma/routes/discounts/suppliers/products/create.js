const SupplierProductDiscountCreate = () => import('../../../../pages/discounts/suppliers/products/Create.vue');

export default {
    name: 'discounts.suppliers.products.create',
    path: 'create',
    component: SupplierProductDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Supplier Product Discount',
    },
};
