const ClientDiscountEdit = () => import('@enso-ui/discounts/src/bulma/pages/discounts/clients/generalDiscounts/Edit.vue');

export default {
    name: 'discounts.clients.generalDiscounts.edit',
    path: ':generalDiscount/edit',
    component: ClientDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit General Discount',
    },
};
