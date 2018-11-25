<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Episode 1</span>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click="true">
         <md-icon>home</md-icon>
        </md-button> 
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <div class="tap_user" md-elevation="0">
          <md-avatar class="md-large">
           <img src='../../res/img/test.jpg' alt="Peple">
          </md-avatar>
          <div class='tap_user2'>
            <span class='name_user'>Ritcabuchi</span>
            <span class='logout'>Logout</span>
          </div>


      </div>


      <div class='divider2'></div>
      <md-list>
        <md-list-item>
          <md-button @click="true">Episode 1</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true">Episode 2</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true">Episode 3</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true">Episode 4</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true">Episode 5</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
            <md-button @click="true">Episode 6</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true">Episode 7</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
         <md-button @click="true" >Episode 8</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true" >Episode 9</md-button>
        </md-list-item>
        <div class='divider3'></div>
        <md-list-item>
          <md-button @click="true">Episode 10</md-button>
        </md-list-item>
        <div class='divider3'></div>
      </md-list>
    </md-drawer>

    <div class='divider'></div>
    <md-content>
        <div class='content_ep'></div>
    </md-content>
  </div>

</template>

<script>
  export default {
    name: 'Layout_cartoon',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style lang="scss" scoped>
  .page-container {
    overflow: hidden;
    height: 100vh;
    background: #87BCBF;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    background: #f8fafa;
  }
  .name_user{
    color: #000808; 
    font-weight:bold; 
  }

  .md-content {
    margin-right: 17px;
    margin-left: 17px;
    margin-bottom: 20px;
    height: 100vh;

    background: #d7e9ea;
  }
  .md-icon{
      color: #f8fafa;
  }
  .md-title{
      color: #f8fafa;
  }
  .separator + .separator {
    margin-top: 24px;
  }
  .divider{
    margin-right: 16px;
    margin-left: 16px;
    height: 11px;
    border-bottom: 1px solid #fff;
    text-align: center;
    margin-bottom: 16px;
  }
  .divider2{
    margin-right: 16px;
    margin-left: 16px;
    height: 5px;
    border-bottom: 1.5px solid rgb(8, 0, 0);
    text-align: center;
    
  }
  .divider3{
    margin-right: 16px;
    width: 150px;
    margin-left: 16px;
    height: 5px;
    border-bottom: 1.5px solid rgb(8, 0, 0);
    text-align: center;
    
  }
  .md-list-item{
    width: 70%;
  }
  .tap_user{
    display: flex;
    flex-direction: row;
    max-width: 500px;
    width: 100%;
    padding: 5px;
  }
  .tap_user2{
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 5px;
    margin-top:16px; 
  }
  .logout{
    color: #f7020e;
    font-weight: bold;
  }
  .md-avatar{
    margin: 15px;
  }
  
</style>