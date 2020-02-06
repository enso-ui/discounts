<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop">
            <base-form
                @loaded="update"
                @undo="
                    $refs.personClient.field.meta.disabled = false;
                    $refs.companyClient.field.meta.disabled = false;
                "
                ref="form"/>
        </div>
    </div>
</template>

<script>
import BaseForm from '../components/BaseForm.vue';

export default {
    name: 'Edit',

    components: { BaseForm },

    methods: {
        update() {
            this.$refs.form.$refs.form
                .field('person_id').meta.disabled = this.$refs.form.$refs.form
                .field('person_id').value === null;
            this.$refs.form.$refs.form
                .field('company_id').meta.disabled = this.$refs.form.$refs.form
                .field('company_id').value === null;
        },
    },
};
</script>
