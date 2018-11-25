<template>
    <div class='container'>
        <h1>Register Page</h1>
        <router-link to='/login'>Login</router-link>
        <router-link to='/'>Main</router-link>
        <router-link to='/developer'>Developer</router-link>
    </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
    .contaner{
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }
</style>
