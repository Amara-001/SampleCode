<template>
  <div class="header-container">
    <HeaderView/>
  </div>
 <router-view></router-view>
</template>

<script>
  import HeaderView from './components/HeaderView.vue'

export default {
    name: 'App',
    components: {
      HeaderView,
  },
}
</script>

<style>

:root {
  --dark-purple: #150E28;
  --light-purple: #903AFF;
  --violet: #D434FE;
  --separator-color: rgba(255, 255, 255, 0.18);
}

@font-face {
        font-family: Montserrat;
        src: url('./assets/fonts/Montserrat-Regular.ttf');
        font-weight: 700;
    }

@font-face {
        font-family: MADE TOMMY Outline;
        src: url('./assets/fonts/MADE\ TOMMY\ Black\ Outline_PERSONAL\ USE.otf');
        font-weight: 700;
    }

@font-face {
    font-family: Unica One;
    src: url('./assets/fonts/UnicaOne-Regular.ttf');
    font-weight: 700;
}

@font-face {
    font-family: Clash Display;
    src: url('./assets/fonts/ClashDisplay-Bold.otf');
    font-weight: 700;
}

* {
  margin: 0px;
  /* overflow-x: hidden; */
  max-width: 100vw;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0px;
}

html {
  overflow-x: hidden;
  max-width: 100vw;
  /* border: solid orange 1px; */
  margin: 0px;
}





body {
  background-color: var(--dark-purple);
  height: 100%;
  position: relative;
  margin: 0px;
  /* height: 20000px; */
  background-image: url('./assets/Purple-Lens-Flare-PNG3.png');
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  /* border: solid red 1px; */

  max-width: 100vw;
  overflow-x: hidden
  /* margin-right: 0px;
  padding-right: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px; */
}

hr {
  border: 1px solid var(--separator-color);
  width: 100vw;
}

.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

#app {
  max-width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
  /* border: solid blue 1px; */
  padding: 0px;
}

</style>
