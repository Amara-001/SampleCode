<template>
    <div class="frequently-asked">
        <div class="star-pur-faq"></div>
        <div class="faq-img"></div>
        <div class="asked-questions">
            <p class="questions-title">
                Frequently Ask <br/>
                <span>Question</span>
            </p>
            <p class="questions-intro">
                We got answers to the questions that you might
                want to ask about <span>getlinked Hackathon 1.0</span>
            </p>
            <AskedQuestions/>
        </div>
    </div>
    <hr/>
</template>

<script>
    import AskedQuestions from './AskedQuestions.vue'
    export default {
        name: 'FrequentlyAsked',
        components: {
            AskedQuestions
        }
    }
</script>


<style scoped>
    .frequently-asked {
        position: relative;
        min-height: 964px;
        max-width: 100%;
        /* border: solid yellow 1px; */
    }

    .asked-questions {
        position: absolute;
        max-width: 420px;
        margin-left: 100px;
        /* min-height: 630px; */
        height: fit-content;
        margin-top: 140px;
        /* border: solid yellow 1px; */
    }

    .questions-title {
        height: 86px;
        width: 253px;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }

    .questions-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }

    .questions-intro {
        height: 55px;
        width: 342px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    .questions-intro span {
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: bold;
    }

    .star-pur-faq {
        height: 36px;
        width: 30px;
        background-image: url('../assets/star\ pu.png');
        background-repeat: no-repeat;
        position: absolute;
        margin-top: 60px;
        margin-left: 80px;
    }

    .faq-img {
        height: 720px;
        width: 720px;
        background-image: url("../assets/cwok_casual_21\ 1.png");
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        margin-left: 500px;
        margin-top: 130px;
    }

</style>