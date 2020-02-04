const SupplierServiceDiscountEdit = () => import('../../../pages/discounts/supplierServiceDiscounts/Edit.vue');

export default {
    name: 'discounts.supplierServiceDiscounts.edit',
    path: ':supplierProductDiscount/edit',
    component: SupplierServiceDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Service Discount',
    },
};
