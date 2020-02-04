const SupplierProductDiscountEdit = () => import('../../../pages/discounts/supplierProductDiscounts/Edit.vue');

export default {
    name: 'discounts.supplierProductDiscounts.edit',
    path: ':supplierProductDiscount/edit',
    component: SupplierProductDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Supplier Product Discount',
    },
};
