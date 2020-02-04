const SupplierDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/suppliers/generalDiscounts/Edit.vue');

export default {
    name: 'discounts.suppliers.generalDiscounts.edit',
    path: ':generalDiscount/edit',
    component: SupplierDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit General Discount',
    },
};
