const SupplierProductDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/suppliers/products/Edit.vue');

export default {
    name: 'discounts.suppliers.products.edit',
    path: ':product/edit',
    component: SupplierProductDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Product Discount',
    },
};
