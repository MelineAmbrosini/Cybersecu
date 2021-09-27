<template>
    <div>
        <v-text-field>
        <input type="text"
               class="some-class"
               
               :value="value"
               @input="$emit('input', value)" />
        </v-text-field>

        
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>
