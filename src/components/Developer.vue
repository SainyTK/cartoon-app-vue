<template>
    <div class='container'>
        <h1>Developer Page</h1>
        <router-link to='/login'>Login</router-link>
        <router-link to='/'>Main</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/Card'>Card</router-link>
    </div>
</template>

<script>
export default {
  name: 'Developer'
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
