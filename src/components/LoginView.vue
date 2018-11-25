<template>
  <div class='container'>
    <md-content>
        <Login v-if="loginPageState=='login'"/>
        <Register v-if="loginPageState=='register'"/>
    </md-content>
    <div class='lang-container'>
      <span v-bind:class='en' value='en' @click='changeLang'>EN</span>
      <span>|</span>
      <span v-bind:class='th' value='th' @click='changeLang'>TH</span>
    </div>
    <md-dialog :md-active.sync="isShowDialog" class='dialog-container'>
      <md-dialog-title>{{messages.resetPasswordTitle}}</md-dialog-title>
        <md-tabs>
          <md-tab>
             <p>{{messages.askResetPassword}}</p>
              <div id='forget-password-container' class='input-container'>
                <input type='email' class='input-text' v-bind:placeholder='`${messages.email}`' :value='email' @input='updateEmail' />
              </div>
          </md-tab>
        </md-tabs>
      <md-dialog-actions>
        <md-button class="md-primary" @click='closeDialog'>{{messages.cancel}}</md-button>
        <md-button class="md-primary" @click='sendResetPassword'>{{messages.confirm}}</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import firebase from 'firebase';
import Login from './Login';
import Register from './Register';
import { mapState,mapGetters } from 'vuex' 

export default {
  name: 'LoginView',
  data: function() {
    return{
    }
  },
  components: {
      Login,
      Register
  },
  methods: {
    openDialog: function(e){
      this.$store.dispatch('changeShowDialog',true)
    },
    closeDialog: function(e){
      this.$store.dispatch('changeShowDialog',false)
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
    },
    sendResetPassword: function(){
      let auth = firebase.auth();
      let emailAddress = this.email;
      console.log(emailAddress)
      auth.sendPasswordResetEmail(emailAddress).then(function() {
        console.log('reset email')
      }).catch(function(error) {
        console.log(error)
      });

      this.closeDialog()
    },
    updateEmail: function(e){
        this.$store.dispatch('onChangeEmail',e.target.value)
    }
  },
  computed: {
    ...mapGetters({
        messages: 'messages'
    }),
    ...mapState({
        email: state => state.email,
        isShowDialog: state => state.isShowDialog,
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
        loginPageState: state => state.loginPageState
    }),
  }
}
</script>

<style lang='scss' scoped>
  .container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #87BCBF;
    padding: 10px 20px 10px 20px;
  }
  .lang-container{
    display: flex;
    font-size: 10px;
    color: #fff;
    height: 14px;
    width: 100%;
    text-align: right;
    justify-content: flex-end
  }
  .lang-active{
    cursor: pointer;
    color: #fff;
  }
  .lang-inactive{
    cursor: pointer;
    color: #cecece;
  }
  .md-content{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    // height: 100vh;
  }
  .login-container{
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .logo_img{
    margin-bottom: 50px;
  }
  .form-icon{
    width: 24px;
    height: 24px;
  }
  .input-container{
    display: flex;
    width: 70%;
    flex-direction: row;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    margin-bottom: 10px;
  }
  .input-text{
    display: flex;
    flex: 1;
    background-color:rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    margin-left: 5px;
  }
  .input-text:focus{
    outline-width: 0
  }
  .input-text::placeholder{
    color:#cecece;
  }
  #reset-password-container{
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    margin:0
  }
  .forget-password{
    color: #fff;
    font-size: 12px;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    text-transform: capitalize
  }
  .btn{
    width: 85%;
    border-radius: 8px;
    background-color: #fff;
    color: #000;
    border: none;
    text-transform: uppercase;
    margin: 8px;
    text-align: center;
  }
  #btn-register{
    background-color: #D97D54;
    color: #fff;
  }
  .divider{
    width: 100%;
    height: 11px;
    border-bottom: 1px solid #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .divider-text{
    text-transform: center;
    font-size:16px;
    padding: 0px 16px;
    color: #fff;
    background: #87BCBF
  }
  .social-icon-container{
    display: flex;
    flex-direction: row;
  }
  .social-icon{
    height: 36px;
    width: 36px;
    border: 1px solid #fff;
    border-radius: 18px;
    padding: 6px;
    margin:10px;
  }
  .dialog-container{
    background: #fff;
  }
</style>
