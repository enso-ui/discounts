const ClientServiceDiscountEdit = () => import('../../../pages/discounts/clientServiceDiscounts/Edit.vue');

export default {
    name: 'discounts.clientServiceDiscounts.edit',
    path: ':clientServiceDiscount/edit',
    component: ClientServiceDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Service Discount',
    },
};
