const ClientDiscountEdit = () => import('../../../../pages/discounts/clients/generals/Edit.vue');

export default {
    name: 'discounts.clients.generals.edit',
    path: ':general/edit',
    component: ClientDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit General Discount',
    },
};
