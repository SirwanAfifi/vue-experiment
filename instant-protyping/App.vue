<template>
    <ul>
        <li v-for="name in names" v-bind:key="name">{{ name }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            names: ["Sirwan", "Kaywan", "Sana"]
        }
    }
}
</script>