const SupplierServiceDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/suppliers/serviceDiscounts/Edit.vue');

export default {
    name: 'discounts.suppliers.serviceDiscounts.edit',
    path: ':serviceDiscount/edit',
    component: SupplierServiceDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Service Discount',
    },
};
