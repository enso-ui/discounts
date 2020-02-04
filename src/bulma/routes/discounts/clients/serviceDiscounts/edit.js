const ClientServiceDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/serviceDiscounts/Edit.vue');

export default {
    name: 'discounts.clients.serviceDiscounts.edit',
    path: ':serviceDiscount/edit',
    component: ClientServiceDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Service Discount',
    },
};
