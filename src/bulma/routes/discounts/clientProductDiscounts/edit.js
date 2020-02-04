const ClientProductDiscountEdit = () => import('../../../pages/discounts/clientProductDiscounts/Edit.vue');

export default {
    name: 'discounts.clientProductDiscounts.edit',
    path: ':clientProductDiscount/edit',
    component: ClientProductDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Product Discount',
    },
};
