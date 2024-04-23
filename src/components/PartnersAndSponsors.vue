<template>
    <div class="partners">
        <div class="partner-star-pur-bg"></div>
        <div class="partner-star-pur-sm"></div>
        <div class="partner-star-br-bg"></div>
        <div class="left-flare"></div>
        <div class="right-flare"></div>
        <div class="partner-top">
            <p class="partner-title">
                Partners and Sponsors
            </p>
            <p class="partner-text">
                Getlinked Hackathon 1.0 is honored to have the following major 
                companies as its partners and sponsors
            </p>
        </div>   
        <div class="partner-bottom">
            <div class="logo-container">
                <div class="line-box">
                    <div class="upper-line">
                        <div class="vertical-line"></div>
                        <div class="vertical-line"></div>
                    </div>
                    <div class="middle-line">
                        <div class="horizontal-line"></div>
                        <div class="horizontal-line"></div>
                        <div class="horizontal-line"></div>
                    </div>
                    <div class="lower-line">
                        <div class="vertical-line"></div>
                        <div class="vertical-line"></div>
                    </div>
                </div>
                <div class="sponsors-logos">
                    <div id="logo-1" class="grid-item"></div>
                    <div id="logo-2" class="grid-item"></div>
                    <div id="logo-3" class="grid-item"></div>
                    <div id="logo-4" class="grid-item"></div>
                    <div id="logo-5" class="grid-item"></div>
                    <div id="logo-6" class="grid-item"></div>
                </div>
            </div>
        </div>    
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
        /* border: solid yellow 1px; */
        position: relative;
        /* background-image: url('../assets/Purple-Lens-Flare-PNG\ Partners-Left.png'), url('../assets/Purple-Lens-Flare-PNG\ Partners-Right.png');
        background-repeat: no-repeat, no-repeat;
        background-position: left top, right bottom; */
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);

    }
    
    .partner-star-pur-bg {
        position: absolute;
        width: 30px;
        height: 36px;
        flex-shrink: 0;
        margin-left: 15%;
        margin-top: 16%;
        background-image: url('../assets/star\ pu.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
    }
    
    .partner-star-br-bg {
        position: absolute;
        width: 30px;
        height: 36px;
        flex-shrink: 0;
        margin-left: 56%;
        margin-top: 55%;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;

    }

    .partner-star-pur-sm {
        position: absolute;
        width: 23px;
        height: 28px;
        flex-shrink: 0;    
        margin-left: 56%;
        margin-top: 22%;
        background-image: url('../assets/sata\ gra.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
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

    .partner-top {
        height: 10%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .partner-bottom {
        height: 90%;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .logo-container {
        position: relative;
        width: 1024px;
        height: 560px;
        /* border: solid red 1px; */
    }

    .line-box {
        width: 100%;
        height: 560px;
        /* border: solid green 1px; */
        margin-left: 0;
        margin-top: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .upper-line {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 48%;
        width: 100%;

    }

    .middle-line {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 4%;
        width: 100%;

    }

    .lower-line {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 48%;
        width: 100%;

    }

    .vertical-line {
        width: 4px;
        height: 112.476px;
        background: #D434FE;
        
    }
    
    .horizontal-line {
        width: 257.298px;
        height: 4px;
        background: #D434FE;
    }

    .sponsors-logos {
        width: 100%;
        height: 560px;
        border-radius: 5px;
        border: 1px solid #D434FE;
        background: rgba(255, 255, 255, 0.01);
        margin-left: 0;
        margin-top: 0;
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        /* grid-template-columns: 200px 200px 200px; */
        grid-template-rows: 50% 50%;
        /* grid-template-rows: 150px 150px; */
    }

    .grid-item {
        align-self: center;
        justify-self: center;
    }

    .partner-title {
        height: 28px;
        width: 376px;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        text-align: center;
    }

    .partner-text {
        height: 55px;
        width: 452px;
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    #logo-1 {
        height: 100px;
        width: 200px;
        background-image: url('../assets/Liberty\ company\ logo\ white\ colour.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    #logo-2 {
        height: 100px;
        width: 200px;
        background-image: url('../assets/Liberty\ company\ logo\ white.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    #logo-3 {
        height: 100px;
        width: 200px;
        background-image: url('../assets/Winwise\ logo\ White\ colour\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    #logo-4 {
        height: 100px;
        width: 200px;
        background-image:  url('../assets/wisper\ logo\ white.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    #logo-5 {
        height: 100px;
        width: 200px;
        background-image:  url('../assets/Paybox.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    #logo-6 {
        height: 100px;
        width: 200px;
        background-image:  url('../assets/Vuzual\ Plus.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>