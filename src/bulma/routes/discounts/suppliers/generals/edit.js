const SupplierDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/suppliers/generals/Edit.vue');

export default {
    name: 'discounts.suppliers.generals.edit',
    path: ':general/edit',
    component: SupplierDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit General Discount',
    },
};
