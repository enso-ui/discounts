const ClientServiceDiscountEdit = () => import('../../../../pages/discounts/clients/services/Edit.vue');

export default {
    name: 'discounts.clients.services.edit',
    path: ':service/edit',
    component: ClientServiceDiscountEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Client Service Discount',
    },
};
