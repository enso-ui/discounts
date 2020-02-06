const ClientProductDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/products/Edit.vue');

export default {
    name: 'discounts.clients.products.edit',
    path: ':product/edit',
    component: ClientProductDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Product Discount',
    },
};
