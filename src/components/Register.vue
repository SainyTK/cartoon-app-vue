<template>
    <div>
        <md-content>
            <div class='login-container'>
                <img src='../../res/img/one_piece_logo.png' alt='one_piece' class='logo_img' />
                <div class='input-container'>
                    <md-icon>person</md-icon>
                    <input type='text' id='input-user' class='input-text' placeholder='Username' />
                </div>
                <div class='input-container'>
                    <md-icon>email</md-icon>
                    <input type='text' id='input-password' class='input-text' placeholder='E-mail' />
                </div>
                <div class='input-container'>
                    <md-icon>lock_outline</md-icon>
                    <input type='text' id='input-user' class='input-text' placeholder='Password' />
                </div>
                <div class='input-container'>
                    <md-icon>lock_outline</md-icon>
                    <input type='text' id='input-password' class='input-text' placeholder='Comfirm Password' />
                </div>
                <router-link to='/' id='btn-create' class='btn'>Join Now</router-link>
                <div class='divider'><span class='divider-text'> Or Join us with</span></div>
                <div class='social-icon-container'>
                    <svg class='social-icon' viewBox="0 0 24 24">
                        <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                    </svg>
                    <svg class='social-icon' viewBox="0 0 24 24">
                        <path fill="#fff" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
                    </svg>
                </div>
            </div>
        </md-content>
    </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
@import "../assets/css/style.css";
.contaner {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
