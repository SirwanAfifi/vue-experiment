<template>
    <ul>
        <li v-for="user in users" v-bind:key="user.id">
            <img :src="'https://ui-avatars.com/api/?name=' + user.name.replace('', '+')" alt="">    {{ user.name }}
        </li>
    </ul>
</template>

<script>
export default {
    created() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(data => data.json())
        .then(response => {
            this.users = [...response];
        });
    },
    data() {
        return {
            users: []
        }
    }
}
</script>