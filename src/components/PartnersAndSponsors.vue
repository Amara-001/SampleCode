<template>
    <div class="partners">
        <div class="left-flare"></div>
        <div class="right-flare"></div>
        <div class="partner-top"></div>       
    </div>
</template>

<script>
    export default {
        name: 'PartnersAndSponsors',
        components: {

        }
    }
</script>

<style scoped>
    .partners {
        max-width: 100%;
        height: 940px;
        border: solid yellow 1px;
        position: relative;
        /* background-image: url('../assets/Purple-Lens-Flare-PNG\ Partners-Left.png'), url('../assets/Purple-Lens-Flare-PNG\ Partners-Right.png');
        background-repeat: no-repeat, no-repeat;
        background-position: left top, right bottom; */
    }

    .left-flare {
        position: absolute;
        background-image: url('../assets/Purple-Lens-Flare-PNG\ Partners-Left.png');
        background-repeat: no-repeat;
        background-size: contain;
        width: 1037px;
        height: 948px;
        background-blend-mode: hard-light;
        margin-top: -100px;
        margin-left: -5px;
    }

    .right-flare {
        position: absolute;
        background-image: url('../assets/Purple-Lens-Flare-PNG\ Partners-Right.png');
        background-repeat: no-repeat;
        background-size: contain;
        width: 1037px;
        height: 948px;
        background-blend-mode: hard-light;
        margin-top: 350px;
        margin-left: 680px;
    }
</style>