<template>
  <div>
    <md-content>
      <div class='container'>
        <img src='../../res/img/one_piece_logo.png' alt='one_piece' />
        <md-list class="md-triple-line">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Ali Connors</span>
              <span>Brunch this weekend?</span>
              <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">star</md-icon>
            </md-button>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>me, Scott, Jennifer</span>
              <span>Summer BBQ</span>
              <p>Wish I could come, but I'm out of town this week. :(</p>
            </div>
            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>me, Scott, Jennifer</span>
              <span>Summer BBQ</span>
              <p>Wish I could come, but I'm out of town this week. :(</p>
            </div>
            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
          <md-divider class="md-inset"></md-divider>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>me, Scott, Jennifer</span>
              <span>Summer BBQ</span>
              <p>Wish I could come, but I'm out of town this week. :(</p>
            </div>
            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </div>

    </md-content>
    <div class="bar">
      <div class="phone-viewport">
        <md-bottom-bar md-sync-route>
          <md-bottom-bar-item to="#" md-label="Home" md-icon="home"></md-bottom-bar-item>
          <md-bottom-bar-item to="#" md-label="Posts" md-icon="favorite"></md-bottom-bar-item>
          <md-bottom-bar-item to="#" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Card'
}
</script>
<style lang="scss" scoped>
@import "../assets/css/style.css";
.md-list {
  width: 400px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}

.phone-viewport {
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, 0.26);
  background: rgba(#000, 0.06);
}
</style>
