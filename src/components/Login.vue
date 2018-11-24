<template>
  <div>
    <md-content>
      <div class='login-container'>
        <img src='../../res/img/one_piece_logo.png' alt='one_piece' class='logo_img'/>
        <div class='input-container'>
          <svg class='form-icon' viewBox="0 0 24 24">
            <path fill="#fff" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
          <input type='email' id='input-user' class='input-text' placeholder='Email' v-model='email'/>
        </div>
        <div class='input-container'>
          <svg class='form-icon' viewBox="0 0 24 24">
            <path fill="#fff" d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
        </svg>
          <input type='password' id='input-password' class='input-text' placeholder='Password' v-model='password'/>
        </div>
        <span class='forget-password'>Forget your password ?</span>
        <md-button id='btn-login' class='btn' @click='login'>Login</md-button>
        <md-button id='btn-register' class='btn'><router-link to='/register' style='color:white'>Register</router-link></md-button>
        <div class='divider'><span class='divider-text'> Or </span></div>
        <div class='social-icon-container'>
          <svg id='facebook-auth' @click='facebookAuth' class='social-icon' viewBox="0 0 24 24">
            <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
          </svg>
          <svg id='google-auth' @click='googleAuth' class='social-icon' viewBox="0 0 24 24">
            <path fill="#fff" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
          </svg>
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data: function() {
    return{
      email:'',
      password:''
    }
  },
  methods: {
    login :function(e){
      console.log(this.email)
      console.log(this.password)
      firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(result => {
        this.$router.push('/')
      },error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
      })
      e.preventDefault()
    },
    googleAuth: function(e){
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithPopup(provider).then(result => {
        this.$router.push('/')
      },error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
      });
      e.preventDefault()
    },
    facebookAuth: function(e){
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithPopup(provider).then(result => {
        this.$router.push('/')
      },error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
      });
      e.preventDefault()
    }
  }
}
</script>

<style lang='scss' scoped>
  .md-content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #87BCBF;
  }
  .login-container{
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
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
  .forget-password{
    color: #fff;
    font-size: 12px;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
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
</style>
