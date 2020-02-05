const SupplierDiscountCreate = () => import('@enso-ui/discounts/src/bulma/pages/discounts/suppliers/generals/Create.vue');

export default {
    name: 'discounts.suppliers.generals.create',
    path: 'create',
    component: SupplierDiscountCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create General Discount',
    },
};
