<template>
  <div class='centered-container'>
    <md-content class='md-elevation-3'>
      
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss' scoped>
  .centered-container{
    display: flex;
    height: 100vh;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .md-content{
    z-index: 1;
    width:80%;
    max-width: 400px;
    padding: 40px;
  }
</style>
