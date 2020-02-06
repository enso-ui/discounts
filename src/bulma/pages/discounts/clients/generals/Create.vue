<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop">
            <base-form/>
        </div>
    </div>
</template>

<script>
import BaseForm from '../components/BaseForm.vue';

export default {
    name: 'Create',

    components: { BaseForm },
};
</script>
