<template>
    <ul>
        <li v-for="user in users" v-bind:key="user.id">
            <img :src="'https://ui-avatars.com/api/?name=' + user.name.replace('', '+')" alt="">
            <span> {{ user.name }}</span>
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

<style scoped>
ul {
    list-style-type: none;
}
ul li {
    display: flex;
    align-items: center;
    margin: 10px;
}

ul li span {
    margin-left: 20px;
}
</style>