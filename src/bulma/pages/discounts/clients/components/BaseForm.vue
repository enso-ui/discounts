<template>
    <enso-form class="box has-background-light raises-on-hover"
        v-on="$listeners"
        @undo="
            $refs.personClient.field.meta.readonly = false;
            $refs.companyClient.field.meta.readonly = false;
        "
        ref="form">
        <template v-slot:company_id="{ field }">
            <form-field :field="field"
                ref="companyClient"
                @input="$refs.personClient.field.meta.readonly = $event !== null"/>
        </template>
        <template v-slot:person_id="{ field }">
            <form-field :field="field"
                ref="personClient"
                @input="$refs.companyClient.field.meta.readonly = $event !== null"/>
        </template>
    </enso-form>
</template>

<script>
import { EnsoForm, FormField } from '@enso-ui/forms/bulma';

export default {
    name: "BaseForm",

    components: { EnsoForm, FormField },
}
</script>

