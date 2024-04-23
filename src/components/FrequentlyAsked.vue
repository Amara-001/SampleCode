<template>
    <div class="frequently-asked">
        <div class="frequently-left">
            <div class="star-pur-faq"></div>
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
        <br/>
        <div class="frequently-right">
            <div class="star-pur-sm-1"></div>
            <div class="star-pur-sm-2"></div>
            <div class="star-br"></div>
            <div class="star-lt"></div>
            <div class="question-mark-1">?</div>
            <div class="question-mark-2">?</div>
            <div class="question-mark-3">?</div>
            <div class="faq-img"></div>
        </div>
    </div>
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
        height: 964px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* border: solid yellow 1px; */
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);

    }

    .frequently-left {
        height: 100%;
        max-width: 40%;
        position: relative;
    }

    .frequently-right {
        height: 100%;
        max-width: 60%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .star-pur-sm-1 {
        position: absolute;
        margin-top: -120%;
        width: 21px;
        height: 25px;
        flex-shrink: 0;
        background-image: url('../assets/sata\ gra.png');
        background-repeat: no-repeat;
        background-size: contain;
        
    }
    
    .star-pur-sm-2 {
        position: absolute;
        margin-top: -60%;
        margin-left: -65%;
        width: 21px;
        height: 25px;
        flex-shrink: 0;
        background-image: url('../assets/sata\ gra.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .star-br {
        position: absolute;
        width: 26px;
        height: 32px;
        margin-left: 55%;
        margin-top: 99%;
        flex-shrink: 0;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .star-lt {
        position: absolute;
        width: 26px;
        height: 32px;
        margin-left: -95%;
        margin-top: 10%;
        flex-shrink: 0;
        background-image: url('../assets/star\ \(1\).png');
        background-repeat: no-repeat;
        background-size: contain;

    }

    .question-mark-1 {
        position: absolute;
        width: 114px;
        height: 71px;
        flex-shrink: 0;
        margin-top: -90%;
        margin-left: -70%;
        color: #A866FD;
        font-family: MADE TOMMY Outline;
        font-size: 96px;
        font-style: normal;
        font-weight: 500;
        line-height: 27.5px; /* 28.646% */        
    }
    .question-mark-2 {
        position: absolute;
        width: 114px;
        height: 71px;
        flex-shrink: 0;
        margin-top: -110%;
        margin-left: -27%;
        color: #D434FE;
        font-family: MADE TOMMY Outline;
        font-size: 128px;
        font-style: normal;
        font-weight: 500;
        line-height: 27.5px; /* 21.484% */
    }
    .question-mark-3 {
        position: absolute;
        width: 114px;
        height: 71px;
        flex-shrink: 0;
        margin-top: -90%;
        margin-left: 30%;
        color: #A866FD;
        font-family: MADE TOMMY Outline;
        font-size: 96px;
        font-style: normal;
        font-weight: 500;
        line-height: 27.5px; /* 28.646% */
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
        /* position: absolute; */
        /* margin-left: 500px;
        margin-top: 130px; */
    }

    @media screen and (max-width: 746px) {
        .frequently-asked {
            display: block;
            width: 100vw;
            height: fit-content;
        }

        .frequently-left {
            width: 100vw;
        }

        .frequently-right {
            width: 100vw;
        }

        .asked-questions {
            height: fit-content;
            display: block;
        }

        
    }

</style>