<template>
 <HeaderView/>
 <WelcomeView/>
 <IntroductionView/>
 <RulesView/>
 <JudgingCriteria/>
 <FrequentlyAsked/>
 <TimeLine/>
 <PricesAndRewards/>
 <PartnersAndSponsors/>
</template>

<script>
  import HeaderView from './components/HeaderView.vue'
  import WelcomeView from './components/WelcomeView.vue'
  import IntroductionView from './components/IntroductionView.vue'
  import RulesView from './components/RulesView.vue'
  import JudgingCriteria from './components/JudgingCriteria.vue'
  import FrequentlyAsked from './components/FrequentlyAsked.vue'
  import TimeLine from './components/TimeLine.vue'
  import PricesAndRewards from './components/PricesAndRewards.vue'
  import PartnersAndSponsors from './components/PartnersAndSponsors.vue'

export default {
    name: 'App',
    components: {
      HeaderView,
      WelcomeView,
      IntroductionView,
      RulesView,
      JudgingCriteria,
      FrequentlyAsked,
      TimeLine,
      PricesAndRewards,
      PartnersAndSponsors
  },
  // data () {
  //   return {
  //     deviceWidth: ""
  //   }
  // },

  // methods: {
  //   getDeviceWidth () {
  //     this.deviceWidth = window.innerWidth;
  //   }
  // },

  // created () {
  //   this.getDeviceWidth();
  // }
}
</script>

<style>

@font-face {
        font-family: Montserrat;
        src: url('./assets/fonts/Montserrat-Regular.ttf');
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
  max-width: 100vw;
  margin: 0px;
  padding: 0px;
}


body {
  background-color: #150e28;
  height: 10000px;
  background-image: url('./assets/Purple-Lens-Flare-PNG3.png');
  background-position: left top;
  background-repeat: no-repeat;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

hr {
  border: 1px solid rgba(255, 255, 255, 0.18);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  max-width: 100%;
}

</style>
