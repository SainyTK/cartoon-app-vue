<template>
    <div class='container'>
        <h1>Main Page</h1>
        <router-link to='/login'>Login</router-link>
        <router-link to='/register'>register</router-link>
        <router-link to='/developer'>Developer</router-link>
    </div>
</template>

<script>
export default {
  name: 'Main'
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
