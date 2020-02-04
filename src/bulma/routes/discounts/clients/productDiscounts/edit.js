const ClientProductDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/productDiscounts/Edit.vue');

export default {
    name: 'discounts.clients.productDiscounts.edit',
    path: ':productDiscount/edit',
    component: ClientProductDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Product Discount',
    },
};
