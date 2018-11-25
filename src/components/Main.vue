<template>
    <div class='container'>
        <h1>Main Page</h1>
        <router-link to='/login'>{{messages.login}}</router-link>
        <router-link to='/register'>register</router-link>
        <router-link to='/developer'>Developer</router-link>
        <button @click='logout'>Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Main',
  methods: {
      logout: function(){
          firebase.auth().signOut().then(result => {
              this.$router.push('/login')
          });
      }
  },
  computed: {
      messages(){
          return this.$store.getters.messages
      }
  }
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
