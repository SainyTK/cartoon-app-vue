<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{messages.developer}}</span>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click='toHome'>
         <md-icon>home</md-icon>
        </md-button> 
      </div>
    </md-toolbar>
    
    <md-drawer :md-active.sync="showNavigation">
      <div class="tap_user" md-elevation="0">
          <md-avatar class="md-large">
            <img v-if='hasImage()' v-bind:src='userProfileImage' alt="People">
            <span v-else>{{userName}}</span>
          </md-avatar>
          <div class='tap_user2'>
            <span class='name_user'>{{userName}}</span>
            <span class='logout' @click='signout'>{{messages.logout}}</span>
            <div class='lang-container'>
      <span v-bind:class='en' value='en' @click='changeLang'>EN</span>
      <span>|</span>
      <span v-bind:class='th' value='th' @click='changeLang'>TH</span>
    </div>
          </div>
      </div>
    </md-drawer>

    <div class='divider'></div>

    <div class="content"> 
        <CardDeveloper v-for="developer in developers" :key="developer.name" :developer='developer'/>             
    </div>
  </div>

</template>

<script>
import firebase from 'firebase';
import { mapState,mapGetters } from 'vuex';
import CardDeveloper from './CardDeveloper';

  export default {
    name: 'Main',
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      userName: '',
      userProfileImage: ''
    }),
    components: {
        CardDeveloper
    },
    created(){
        console.log(this.developers)
        console.log(this.messages)
        let user = firebase.auth().currentUser
        this.userName = this.hasDisplayName() ? user.displayName : user.email.toUpperCase().charAt(0)
        this.userProfileImage = user.photoURL
    },
    methods: {
        signout: function(e) {
            firebase.auth().signOut().then(()=>{
                this.$router.push('/login')
            },error => {
                console.log(error)
            })
        },
        hasImage: function(){
            return !!firebase.auth().currentUser.photoURL
        },
        hasDisplayName: function(){
            return !!firebase.auth().currentUser.displayName
        },
        toHome: function(e){
            this.$router.push('/')
        },
         changeLang: function(e){
      e.preventDefault()
      const lang = this.$store.state.lang
      switch(e.target.innerHTML){
        case 'EN':
          if(lang != 'en'){
            this.$store.dispatch('toEng')
          }
          break;
        case 'TH':
          if(lang != 'th'){
            this.$store.dispatch('toThai')
          }
          break;
      }
    }
    },
    computed: {
        ...mapGetters({
            messages: 'messages',
            developers: 'developers'
        }),
        ...mapState({
       
        en: state => {
            if(state.lang == 'en')
                return 'lang-active'
            return 'lang-inactive'
        },
        th: state => {
            if(state.lang == 'th')
                return 'lang-active'
            return 'lang-inactive'
        },
      
    }),
    }
  }
</script>

<style lang="scss" scoped>
  .md-toolbar{
      box-shadow: none
  }
  .lang-active{
    cursor: pointer;
    color: #000;
  }
  .lang-inactive{
    cursor: pointer;
    color: #cecece;
  }
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
  .card-container {
    margin-right: 17px;
    margin-left: 17px;
    margin-bottom: 20px;
    overflow-y:auto;
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
  .content{
      display: flex;
      flex-wrap: wrap;
      overflow: scroll;
      height: 85%
  }
  
</style>