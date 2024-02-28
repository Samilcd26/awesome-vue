<script>

export default {
    computed: {
        currentUser() {
            return this.$store.getters.getCurrentUser;
        }
    },
    data() {
        return {
            myData: 'sadasd'
        };
    },
    created() {
        if (this.currentUser === null) this.$router.push('/login');


    },

    methods: {
        logOut() {
            this.$store.dispatch('cleanCurrentUser')
            this.$router.push('/login');
        }
    }
};
</script>
<template>
    <div class="container">
        <el-result icon="success">
            <template slot="extra">
                <p class="title">Welcome {{ this.currentUser.userName }}!</p>
                <p>Your ID: {{ this.currentUser.id }}</p>
                <el-button @click="logOut" type="primary" size="medium">Back</el-button>
            </template>
        </el-result>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>