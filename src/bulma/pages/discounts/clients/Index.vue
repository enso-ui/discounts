<template>
    <div>
        <div class="columns is-multiline is-centered"
            v-if="ready">
            <div class="column is-narrow">
                <enso-filter class="box raises-on-hover"
                    :options="modes"
                    :name="i18n('Mode')"
                    hide-off
                    v-model="filters.mode"/>
            </div>
        </div>

        <filter-state :api-version="apiVersion"
            name="discountFilters"
            :filters="filters"
            @ready="ready = true"
            ref="filterState"/>

        <div class="tables"
             v-if="ready">
            <enso-table class="box is-paddingless raises-on-hover"
                :path="route('discounts.clients.generals.initTable')"
                id="supplierGeneralDiscounts"
                key="supplierGeneralDiscounts"
                @reset="$refs.filterState.reset()"
                v-if="filters.mode === enums.discountTypes.General"/>

            <enso-table class="box is-paddingless raises-on-hover"
                :path="route('discounts.clients.products.initTable')"
                id="supplierProductDiscounts"
                key="supplierProductDiscounts"
                @reset="$refs.filterState.reset()"
                v-else-if="filters.mode === enums.discountTypes.Product"/>

            <enso-table class="box is-paddingless raises-on-hover"
                :path="route('discounts.clients.services.initTable')"
                id="supplierServiceDiscounts"
                key="supplierServiceDiscounts"
                @reset="$refs.filterState.reset()"
                v-else-if="filters.mode === enums.discountTypes.Service"/>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';
import { EnsoTable } from '@enso-ui/tables/bulma';
import { EnsoFilter } from '@enso-ui/filters/bulma';
import { FilterState } from '@enso-ui/filters/renderless';

export default {
    name: 'Index',

    components: { EnsoTable, EnsoFilter, FilterState },

    inject: ['i18n', 'route'],

    data: () => ({
        ready: false,
        filters: {
            mode: null,
        },
        apiVersion: 2,
    }),

    computed: {
        ...mapState(['enums']),
        modes() {
            return this.enums.discountTypes._filter();
        },
    },

    created() {
        this.filters.mode = this.enums.discountTypes.General;
    }

};
</script>
