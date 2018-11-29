<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button
        class="md-icon-button"
        @click="showNavigation = true"
      >
      <svg class="icon" viewBox="0 0 24 24">
        <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
      </md-button>
      <span class="md-title">{{messages.home}}</span>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click='toDevelopers'>
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="#fff" d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
          </svg>
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

      <div class='divider2'></div>
    </md-drawer>

    <div class='divider'></div>
    <md-content>
      <div class='content_ep'>
        <img v-for='i in 20' :key='i' :src='imageUrl[i-1]'/>
      </div>
    </md-content>
  </div>

</template>

<script>
import firebase from 'firebase'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Main',
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    userName: '',
    userProfileImage: ''
  }),
  created () {
    let user = firebase.auth().currentUser
    this.userName = this.hasDisplayName() ? user.displayName : user.email.toUpperCase().charAt(0)
    this.userProfileImage = user.photoURL

    this.loadCartoonImage()
  },
  methods: {
    signout: function (e) {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      }, error => {
        console.log(error)
      })
    },
    hasImage: function () {
      return !!firebase.auth().currentUser.photoURL
    },
    hasDisplayName: function () {
      return !!firebase.auth().currentUser.displayName
    },
    toDevelopers: function (e) {
      this.$router.push('/developer')
    },
    changeLang: function (e) {
      e.preventDefault()
      const lang = this.$store.state.lang
      switch (e.target.innerHTML) {
        case 'EN':
          if (lang != 'en') {
            this.$store.dispatch('toEng')
          }
          break
        case 'TH':
          if (lang != 'th') {
            this.$store.dispatch('toThai')
          }
          break
      }
    },
    changeEp: function(ep,e){
      this.$store.dispatch('changeEp',ep)
      this.showNavigation = false
      this.loadCartoonImage()
    },
    loadCartoonImage: function(){
      this.$store.dispatch('loadCartoonImage')
    }
  },
  computed: {
    ...mapGetters({
      messages: 'messages'
    }),
    ...mapState({
      lang: state => {
        console.log('lang' + state.lang)
        return state.lang
      },
      imageUrl: state => state.cartoonImageUrl,
      currentEp : state => state.currentEp
    }),
    en: state => {
      if (state.lang == 'en') { return 'lang-active' }
      return 'lang-inactive'
    },
    th: state => {
      if (state.lang == 'th') { return 'lang-active' }
      return 'lang-inactive'
    }
  }
}
</script>

<style lang="scss" scoped>
.md-toolbar {
  box-shadow: none;
}
.lang-active {
  cursor: pointer;
  color: #000;
}
.icon{
    width: 24px;
    height: 24px;
}
.lang-inactive {
  cursor: pointer;
  color: #cecece;
}
.page-container {
  overflow: hidden;
  height: 100vh;
  background: #87bcbf;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  background: #f8fafa;
}
.name_user {
  color: #000808;
  font-weight: bold;
}
.md-content {
  margin-right: 17px;
  margin-left: 17px;
  margin-bottom: 20px;
  height: 100vh;
  background: #d7e9ea;
}
.md-icon {
  color: #f8fafa;
}
.md-title {
  color: #f8fafa;
}
.separator + .separator {
  margin-top: 24px;
}
.divider {
  margin-right: 16px;
  margin-left: 16px;
  height: 11px;
  border-bottom: 1px solid #fff;
  text-align: center;
  margin-bottom: 16px;
}
.divider2 {
  margin-right: 16px;
  margin-left: 16px;
  height: 5px;
  border-bottom: 1.5px solid rgb(8, 0, 0);
  text-align: center;
}
.divider3 {
  margin-right: 16px;
  width: 150px;
  margin-left: 16px;
  height: 5px;
  border-bottom: 1.5px solid rgb(8, 0, 0);
  text-align: center;
}
.md-list-item {
  width: 70%;
}
.tap_user {
  display: flex;
  flex-direction: row;
  max-width: 500px;
  width: 100%;
  padding: 5px;
}
.tap_user2 {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 5px;
  margin-top: 16px;
}
.logout {
  color: #f7020e;
  font-weight: bold;
}
.md-avatar {
  margin: 15px;
}
.content_ep {
  height: 85%;
  overflow: scroll;
}
</style>
