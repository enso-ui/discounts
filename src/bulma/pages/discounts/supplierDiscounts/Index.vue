<template>
    <div>
        <div class="columns is-multiline is-centered"
            v-if="ready">
            <div class="column">
                <enso-select-filter class="box raises-on-hover"
                    :options="enums.discountTypes._select()"
                    disable-filtering="true"
                    :name="i18n('Mode')"
                    v-model="filters.mode"/>
            </div>
        </div>

        <filter-state :api-version="apiVersion"
            name="supplier_discount_filters"
            :filters="filters"
            @ready="ready = true"
            ref="filterState"/>

        <enso-table class="box is-paddingless raises-on-hover"
            :path="tablePath"
            id="supplier_discounts"
            v-if="ready"/>
    </div>

</template>

<script>
import { mapState } from 'vuex';
import { EnsoTable } from '@enso-ui/tables/bulma';
import { EnsoSelectFilter } from '@enso-ui/filters/bulma';
import { FilterState } from '@enso-ui/filters/renderless';

export default {
    name: 'Index',

    components: { EnsoTable, EnsoSelectFilter, FilterState },

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
        tablePath() {
            switch (this.filters.mode) {
                case this.enums.discountTypes.General:
                    return this.route('discounts.supplierDiscounts.initTable');
                case this.enums.discountTypes.Product:
                    return this.route('discounts.supplierProductDiscounts.initTable');
                case this.enums.discountTypes.Service:
                    return this.route('discounts.supplierServiceDiscounts.initTable');
            }
        }
    }

};
</script>
