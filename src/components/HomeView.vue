<template>
    <div class="home-view">
        <WelcomeView/>
        <IntroductionView/>
        <RulesView/>
        <JudgingCriteria/>
        <FrequentlyAsked/>
        <TimeLine/>
        <PricesAndRewards/>
        <PartnersAndSponsors/>
        <PrivacyAndPolicy/>
        <FooterView/>
    </div>
</template>

<script>
        import WelcomeView from './WelcomeView.vue'
        import IntroductionView from './IntroductionView.vue'
        import RulesView from './RulesView.vue'
        import JudgingCriteria from './JudgingCriteria.vue'
        import FrequentlyAsked from './FrequentlyAsked.vue'
        import TimeLine from './TimeLine.vue'
        import PricesAndRewards from './PricesAndRewards.vue'
        import PartnersAndSponsors from './PartnersAndSponsors.vue'
        import PrivacyAndPolicy from './PrivacyAndPolicy.vue'
        import FooterView from './FooterView.vue'

        export default {

        name: 'HomeView',
        components: {
            WelcomeView,
            IntroductionView,
            RulesView,
            JudgingCriteria,
            FrequentlyAsked,
            TimeLine,
            PricesAndRewards,
            PartnersAndSponsors,
            PrivacyAndPolicy,
            FooterView
        }
    }
</script>

<style scoped>

    .home-view {
        display: block;
        max-width: 100vw;
    }

    hr {
  border: 1px solid rgba(255, 255, 255, 0.18);
}


@media  screen  and (min-width: 746px) {
    .home-view {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }    
}

</style>