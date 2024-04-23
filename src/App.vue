<template>
 <HeaderView/>
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


html {
  height: 100%;
  max-width: 100vw;
  margin-bottom: 0px;
  padding-bottom: 0px;
  /* background-color: #150e28; */
}

body {
  background-color: #150e28;
  height: 100%;
  /* height: 20000px; */
  background-image: url('./assets/Purple-Lens-Flare-PNG3.png');
  background-position: left top;
  background-repeat: no-repeat;
  max-width: 100vw;
  /* margin-right: 0px;
  padding-right: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px; */
}

hr {
  border: 1px solid rgba(255, 255, 255, 0.18);
}

#app {
  max-width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  max-width: 100%;
}

</style>
