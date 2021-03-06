const SupplierServiceDiscountEdit = () => import('../../../../pages/discounts/suppliers/services/Edit.vue');

export default {
    name: 'discounts.suppliers.services.edit',
    path: ':service/edit',
    component: SupplierServiceDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Service Discount',
    },
};
