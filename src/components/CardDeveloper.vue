<template>
  <div class="container">
    <md-card md-with-hover>
      <md-card-media >
        <img src='../../res/img/DSC_0015.jpg' alt="People">
      </md-card-media>
        
      <md-card-header>
        <div class="md-title">TANAKORN</div>
        <div class="md-subhead">Project Manager</div>
      </md-card-header>
      <md-card-content>
        
      </md-card-content>
    </md-card>

  </div>
</template>

<script>
export default {
    name: 'CardDeveloper'
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
width:45%;
    max-width: 200px;
    margin: 5px;
    }
    .md-title{
      font-size: 15px;
    }
</style>
