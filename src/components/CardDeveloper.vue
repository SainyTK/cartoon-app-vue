<template>
<<<<<<< HEAD
  <div class="container">
=======
  <div class='container'>
>>>>>>> 847e45f78084dff48fc0d481357b24a418b807bf
    <md-card md-with-hover>
      <md-card-media >
        <img :src='profileImage' alt="People">
      </md-card-media>
        
      <md-card-header>
        <div class="md-title">{{name}}</div>
        <div class="md-subhead">{{role}}</div>
      </md-card-header>
      <md-card-content>
        
      </md-card-content>
    </md-card>

  </div>
</template>

<script>
export default {
    name: 'CardDeveloper',
    props: ['developer'],
    data(){
      return {
        name:'',
        role:'',
      }
    },
    created(){
      this.name = this.developer.name;
      this.role = this.developer.role;
    },
    computed: {
      profileImage() {
        return require('../../res/img/'+this.developer.profileImage)
      }
    }
}
</script>

<style lang="scss" scoped>
  .md-card {
    background-color: #fff;
    width:100%;
    
      margin: 5px;
   //height: 85%;
    display: inline-block;
    padding: 0%;
    vertical-align: top;    
    
    }
    .container{
<<<<<<< HEAD
width:45%;
    max-width: 200px;
    margin: 5px;
=======
    width:45%;
    max-width: 200px;
    margin: 5px;
    height: fit-content;
>>>>>>> 847e45f78084dff48fc0d481357b24a418b807bf
    }
    .md-title{
      font-size: 15px;
    }
</style>
