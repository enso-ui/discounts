const SupplierProductDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/suppliers/productDiscounts/Edit.vue');

export default {
    name: 'discounts.suppliers.ProductDiscounts.edit',
    path: ':productDiscount/edit',
    component: SupplierProductDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Product Discount',
    },
};
