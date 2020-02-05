<template>
    <div>
        <div class="columns is-multiline is-centered"
            v-if="ready">
            <div class="column is-narrow">
                <enso-filter class="box raises-on-hover"
                    :options="modes"
                    disable-filtering="true"
                    :name="i18n('Mode')"
                    hide-off
                    v-model="filters.mode"/>
            </div>
        </div>

        <filter-state :api-version="apiVersion"
            name="client_discount_filters"
            :filters="filters"
            @ready="ready = true"
            ref="filterState"/>

        <enso-table class="box is-paddingless raises-on-hover"
            :path="route('discounts.clients.generals.initTable')"
            id="client_general_discounts"
            v-if="ready && filters.mode === enums.discountTypes.General"/>

        <enso-table class="box is-paddingless raises-on-hover"
            :path="route('discounts.clients.products.initTable')"
            id="client_product_discounts"
            v-if="ready && filters.mode === enums.discountTypes.Product"/>

        <enso-table class="box is-paddingless raises-on-hover"
            :path="route('discounts.clients.services.initTable')"
            id="client_service_discounts"
            v-if="ready && filters.mode === enums.discountTypes.Service"/>
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
            mode: "1",
        },
        apiVersion: 1,
    }),

    computed: {
        ...mapState(['enums']),
        modes() {
            return this.enums.discountTypes._select()
                .map(mode => ({ value: mode.id, label: mode.name }));
        }
    }

};
</script>
