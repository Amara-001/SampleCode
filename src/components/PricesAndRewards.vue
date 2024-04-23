<template>
    <div class="rewards">
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
        <div class="left-reward">
            <div class="trophy"></div>            
            <div class="reward-star-br-sm"></div>
        </div>
        <div class="right-reward">
            <div class="star-pur-sm-1"></div> 
            <div class="star-pur-sm-2"></div>
            <div class="reward-star-br-1"></div>
            <div class="reward-right-flare"></div>           
            <div class="right-bottom">
                <div class="reward-star-br-2"></div>
                <div class="reward-star-br-3"></div>
                <div class="reward-star-lt"></div>
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
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);

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
        position: relative;
        height: 100%;
        min-width: 60%;
        /* border: solid yellow 1px; */
    }
    
    .reward-right-flare {
        position: absolute;
        width: 404px;
        height: 959px;
        flex-shrink: 0;
        background-image: url('../assets/Purple-Lens-Flare-PNG\ Reward-Right.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
        margin-left: 50%;
        margin-top: 40%;
        z-index: -1;
    }

    .star-pur-sm-1 {
        position: absolute;
        width: 21px;
        height: 25px;
        flex-shrink: 0;
        margin-left: -38%;
        margin-top: 12%;
        background-image: url('../assets/sata\ gra.png');
        background-size: contain;
        background-blend-mode: hard-light;
        
    }
    
    .star-pur-sm-2 {
        position: absolute;
        width: 21px;
        height: 25px;
        flex-shrink: 0;
        margin-top: 18%;
        margin-left: 65%;
        z-index: -1;
        background-image: url('../assets/sata\ gra.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
        
    }
    
    .reward-star-br-1 {
        position: absolute;
        height: 32px;
        width: 26px;
        flex-shrink: 0;
        margin-top: 75%;
        margin-left: -12%;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
        
        
    }
    
    .reward-star-br-2 {
        position: absolute;
        height: 32px;
        width: 26px;
        flex-shrink: 0;
        margin-top: -70%;
        margin-left: -70%;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
        
        
    }
    
    .reward-star-br-3 {
        position: absolute;
        height: 32px;
        width: 26px;
        flex-shrink: 0;
        margin-top: -45%;
        margin-left: 95%;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
    }
    
    .reward-star-lt {
        position: absolute;
        height: 32px;
        width: 26px;
        flex-shrink: 0;
        margin-top: 70%;
        margin-left: 33%;
        background-image: url('../assets/star\ \(1\).png');
        background-repeat: no-repeat;
        background-size: contain;
        background-blend-mode: hard-light;
        
    }

    .reward-star-br-sm {
    position: absolute;
    width: 15px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 5%;
    margin-left: 15%;
    background-image: url('../assets/star-br-sm.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-blend-mode: hard-light;

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
        position: absolute;
        margin-left: 40%;
    }

    .right-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 80%;
        width: 100%;
        margin-top: 20%;
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
        width: 401px;
        height: 51px;
        flex-shrink: 0;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400; 
        margin-left: 15%; 
        margin-bottom: -60px;    
    }
</style>