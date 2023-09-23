<template>
    <div class="rewards">
        <div class="left-reward">
            <div class="trophy"></div>            
        </div>
        <div class="right-reward">
            <div class="right-top">
                <p class="reward-title">
                    Prizes and
                    <span>
                        Rewards
                    </span> 
                </p>
                <p class="reward-text">
                    Highlight of prices or rewards for winners and for participants 
                </p>
            </div>
            <div class="right-bottom">
                <div class="silver">
                    <div class="silver-medal"></div>
                    <div class="silver-box">
                        <p class="medal-text-1">
                            2nd
                        </p>
                        <p class="medal-text-2">
                            Runner
                        </p>
                        <p class="medal-text-3">
                            N300,000
                        </p>
                    </div>
                </div>
                <div class="gold">
                    <div class="gold-medal"></div>
                    <div class="gold-box">
                        <p class="medal-text-1-gold">
                            1st
                        </p>
                        <p class="medal-text-2">
                            Runner
                        </p>
                        <p class="medal-text-3-gold">
                            N400,000
                        </p>
                    </div>
                </div>
                <div class="bronze">
                    <div class="bronze-medal"></div>
                    <div class="bronze-box">
                        <p class="medal-text-1">
                            3rd
                        </p>
                        <p class="medal-text-2">
                            Runner
                        </p>
                        <p class="medal-text-3">
                            N150,000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr/>
</template>

<script>
    export default {
        name: 'PricesAndRewards'
    }
</script>

<style scoped>
    .rewards {
        max-width: 100%;
        height: 940px;
        /* border: solid yellow 1px; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .left-reward {
        height: 100%;
        min-width: 40%;
        /* border: solid yellow 1px; */
        background-image: url('../assets/Purple-Lens-Flare-PNG\ Reward-Left.png');
        background-repeat: no-repeat;
        background-size: contain;
        /* , lightgray -204.25px 7px / 119.817% 104.852% no-repeat; */
        background-blend-mode: hard-light;
    }
    
    .right-reward {
        height: 100%;
        min-width: 60%;
        /* border: solid yellow 1px; */
    }

    .trophy {
        width: 383.6px;
        height: 337.4px;
        /* width: 548px;
        height: 482px; */
        background-image: url('../assets/Trophy.png');
         /* lightgray -119.728px -52.047px / 140.528% 124.038% no-repeat; */
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 60%;
        margin-left: 15%;

    }

    .silver {
        height: 386px;
        width: 212px;
        border: solid transparent 1px;
    }

    .gold {
        height: 495px;
        width: fit-content;
        /* border: solid yellow 1px; */
        margin-left: -40px;
    }

    .bronze {
        height: 386px;
        width: 212px;
        /* border: solid yellow 1px; */
    }

    .silver-medal {
        position: absolute;
        width: 179px;
        height: 180px;
        background-image: url('../assets/silver_medal\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 16.5px;
    }
    .silver-box {
        width: 100%;
        height: 296px;
        border-radius: 8px;
        border: 1px solid #D434FE;
        background: rgba(212, 52, 254, 0.12);
        margin-top: 85px;
    }

    .medal-text-1 {
        color: #FFF;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        text-align: center;
        margin-top: 110px;
    }
    .medal-text-1-gold {
        color: #FFF;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        text-align: center;
        margin-top: 180px;
    }
    .medal-text-2 {
        color: #FFF;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        margin-top: -25px;
        text-align: center;

    }
    .medal-text-3 {
        color: #D434FE;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        margin-top: -15px;
        text-align: center;
    }
    .medal-text-3-gold {
        color: #903AFF;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        margin-top: -15px;
        text-align: center;
    }

    .gold-medal {
        position: absolute;
        width: 296px;
        height: 296px;
        background-image: url('../assets/gold_medal\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    .gold-box {
        width: 212px;
        height: 347px;
        border-radius: 8px;
        border: 1px solid #903AFF;
        background: rgba(144, 58, 255, 0.12);
        margin-top: 148px;
        margin-left: 42px;
    }
    .bronze-medal {
        position: absolute;
        width: 179px;
        height: 180px;
        background-image: url('../assets/bronze_medal\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 16.5px;
    }
    .bronze-box {
        width: 212px;
        height: 296px;
        border-radius: 8px;
        border: 1px solid #D434FE;
        background: rgba(212, 52, 254, 0.12);
        margin-top: 90px;
    }

    .right-top {
        height: 30%;
        width: 100%;
    }

    .right-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 70%;
        width: 100%;
        margin-top: -60px;
    }

    .reward-title {
         height: 78px;
        width: 174px;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 15%;
        margin-top: 45px;
    }

    .reward-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .reward-text {
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400; 
        margin-left: 15%; 
        margin-bottom: -60px;    
    }
</style>