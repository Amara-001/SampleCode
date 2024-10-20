<template>
    <div id="get-link-div">
        <div class="top-block">
            <p class="t-block-msg">Igniting a Revolution in HR Innovation</p>
            <img alt="vector-4" class="vector-4" src="../assets/Vector_4.png" />
        </div>
        <div class="bottom-block">
            <div class="left-block">
                <div class="star"></div>
                <div class="star-lt-1"></div>
                <div class="get-linked-contain">
                    <div class="bulb-div">
                        <p class="gl-tech">getlinked Tech</p>
                        <img alt="bulb" src="../assets/Creative_1.png" class="bulb" />
                    </div>
                    <div class="chain-div">
                        <p class="hackathon">Hackthon <span class="hct-1">1.0</span></p>
                        <img class="chain" alt="chain" src="../assets/chain-9365116-7621444.png" />
                        <img class="fire-star" alt="fire-star" src="../assets/1f4a5.png" />                    </div>
                    <div class="text-title"></div>
                    <p class="gl-message">
                        Participate in getlinked tech Hackathon 2023 stand 
                        a chance to win a Big prize
                    </p>
                    <div class="button-div">
                        <ButtonView/>
                    </div>
                </div>
                <div class="count-down">
                    <p class="time-value">00<span class="time-unit">H</span></p>
                    <p class="time-value">00<span class="time-unit">M</span></p>
                    <p class="time-value">00<span class="time-unit">S</span></p>
                </div>
            </div>
            <div class="right-block">
                <img alt="man-with-glasses" class="man-with-glasses" src="../assets/man-wearing-smart-glasses-touching-virtual-screen_1.png"/>
                <div class="star-lt-2"></div>
                <img src="../assets/Image_1.png" alt="glow-web" class="glow-web">
            </div>
        </div>
    </div>
    <hr/>
</template>

<script>

    import ButtonView from './ButtonView.vue'

    export default {
        name: 'WelcomeView',
        components: {
            ButtonView
        }
    }
</script>

<style scoped>

@media screen and (min-width: 320px) {

    .star {
        width: 26px;
        height: 32px;
        margin-left: 185px;
        background-image: url('../assets/star.png');
    }
    
   
    .chain {
        position: absolute;
        width: 34.4px;
        height: 28.8px;
        margin-left: 210px;
        margin-top: -30px;
    }
    .fire-star {
        position: absolute;
        width: 34.4px;
        height: 28.8px;
        margin-left: 250px;
        margin-top: -30px;
    }

    .hackathon {
        color: #FFF;
        margin: 0;
        top: 0;
        bottom: 0;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        /* line-height: normal; */
    
    }

    .hct-1 {
        color: var(--violet);
        margin: 0;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    /* line-height: normal; */
    }

    .chain-div {
        position: relative;
        margin-top: -25px;
        height: 40px;
        width: 290px;
        margin-left: calc((100% - 290px)/2);
        /* border: solid red 1px; */
    }
    
    .star-lt-1 {
        position: absolute;
        width: 26px;
        height: 32px;
        background-image: url('../assets/star-lt-sm.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 75%;
        margin-top: 80%;
    }
    .star-lt-2 {
        position: absolute;
        width: 26px;
        height: 32px;
        background-image: url('../assets/star-lt-sm.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: -85%;
        margin-top: -99%;
    }

    .bulb-div {
        display: block;
        box-sizing: border-box;
        position: relative;
        /* border: solid blue 1px; */
        height: 70px;
        width: 310px;
    }

    .bulb {
        position: absolute;
        width: 21.2px;
        height: 29.2px;
        margin-left: 235px;
        margin-top: -60px;
        /* border: solid blue 1px; */
    }
    
    .gl-tech {
        color: #FFF;
        /* margin: -15px; */
        width: 310px;
        height: fit-content;
        margin-left: calc((100% - 310px)/2);
        margin-top: 20px;
        bottom: 0;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        text-align: center;
        font-weight: 700;
        line-height: normal;
        /* border: solid black 1px; */
    }
    
    .gl-message {
        color: #FFF;
        margin-top: 10px;
        height: 45px;
        width: 290px;
        /* border: solid red 1px; */
        margin-left: calc((100% - 290px)/2);
        font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        line-height: 166%; /* 33.2px */
    }
    

    .button-div {
        height: fit-content;
        width: 310px;
        display: flex;
        justify-content: center;
        margin-top: 25px;
        /* border: solid red 1px; */
    }
    
    .count-down {
        margin-top: 25px;
        /* height: 75px; */
        height: 60px;
        /* width: 275px; */
        width: 220px;
        margin-left: calc((100% - 220px)/2);
        /* border: 1px solid rgba(255, 255, 255, 0.18); */
    background: #140D27;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    }
    
    .time-value {
        color: #FFF;
    font-family: Unica One;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 133%; /* 85.12px */
    }
    
    .time-unit {
        color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 133%; /* 18.62px */
    }

    .top-block {
        /* display: flex; */
        /* position: absolute; */
        /* flex-direction: row; */
        /* border: solid red 1px; */
        height: 45px;
        width: 310px;
        margin-top: 30px;
        margin-left: calc((100% - 310px)/2);
        /* background-image: url('../assets/Vector\ 4.png');
        background-repeat: no-repeat;
        background-position: right bottom; */
    
    }

    .vector-4 {
        height: 9px;
        width: 120px;
        margin-left: calc(100% - 120px)
    }
    
    
    .t-block-msg {
        width: 100%;
        color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    line-height: normal;
    align-self: flex-end;
    text-align: right;
    }
    
    #get-link-div {
        display: block;
        box-sizing: border-box;
        /* flex-direction: column; */
        /* position: relative; */
        height: 755px;
        box-sizing: border-box;
        width: 320px;
        margin-left: calc((100% - 320px)/2);
        /* border: solid black 1px; */
        /* margin: auto; */
        margin-bottom: 0px;
        margin-top: 120px;
        /* margin-top: 100px; */
        background-image: url('../assets/metrix\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        /* padding-left: 1%; */
        /* border-bottom: 2px solid rgba(255, 255, 255, 0.18); */
    }
    
   
    .bottom-block {
        height: 710px;
        display: block;
        box-sizing: border-box;
        width: 320px;
        /* position: relative; */
        /* border: solid red 1px; */
    
    }
    
    .left-block {
        width: 320px;
        height: 400px;
        overflow: hidden;
        display: block;
        position: relative;
        /* border: solid blue 1px */
    
    }
    
    .right-block {
        display: block;
        position: relative;
        /* margin-top: 20px; */
        /* border: solid yellow 1px; */
        /* margin-top: 130px; */
        width: 310px;
        height: 310px;
        margin-left: calc((100% - 310px)/2);
        overflow: hidden;
        
    }

    .man-with-glasses {
        height: 100%;
        width: 100%;
    }
    
    .glow-web {
        position: absolute;
        /* width: 580px; */
        width: 232.8px;
        /* height: 500px; */
        /* height: 200px; */
        margin-top: 10px;
        margin-left: -250px;
    }
    
}



@media  screen  and (min-width: 672px) {
    /* .bottom-block {
        max-width: 100%;
        display: block;
        align-items: center;
    }

    .right-block {
        max-width: 100%;
        background-size: contain;
    }

    .left-block {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .button-div {
        align-item: center;
    }

    #get-link-div {
        height: fit-content;
        flex-direction: column;
        align-items: center;
    }

    .button-div {
        text-align: center;
    }

    .get-linked-contain {
        text-align: center;
    } */
    
}


@media screen and (min-width: 1024px) {
    .star {
        width: 26px;
        height: 32px;
        margin-left: 185px;
        background-image: url('../assets/star.png');
    }
    
   
    .chain {
        position: absolute;
        width: 55.73px;
        height: 46.66px;
        margin-left: 342px;
        margin-top: -55px;
    }
    .fire-star {
        position: absolute;
        width: 55.73px;
        height: 46.66px;
        margin-left: 395px;
        margin-top: -55px;
    }

    .hackathon {
        color: #FFF;
        margin: 0;
        top: 0;
        bottom: 0;
        font-family: Clash Display;
        font-size: 52px;
        font-style: normal;
        /* border: solid green 1px; */
        font-weight: 700;
        /* line-height: normal; */
    
    }

    .hct-1 {
        color: var(--violet);
        margin: 0;
    font-family: Clash Display;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    /* line-height: normal; */
    }

    .chain-div {
        position: relative;
        margin-top: -50px;
        height: 40px;
        width: 480px;
        margin-left: calc((100% - 480px)/2);
        /* border: solid red 1px; */
    }
    
    .star-lt-1 {
        position: absolute;
        width: 26px;
        height: 32px;
        background-image: url('../assets/star-lt-sm.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 75%;
        margin-top: 80%;
    }
    .star-lt-2 {
        position: absolute;
        width: 26px;
        height: 32px;
        background-image: url('../assets/star-lt-sm.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: -85%;
        margin-top: -99%;
    }

    .bulb-div {
        display: block;
        box-sizing: border-box;
        position: relative;
        /* border: solid blue 1px; */
        height: 113.4px;
        width: 500px;
        margin-top: 40px;
        margin-left: calc((100% - 500px)/2)
    }

    .bulb {
        position: absolute;
        width: 34.34px;
        height: 47.3px;
        margin-left: 335px;
        margin-top: -95px;
        /* border: solid blue 1px; */
    }
    
    .gl-tech {
        color: #FFF;
        /* margin: -15px; */
        width: 480px;
        height: fit-content;
        margin-left: calc((100% - 480px)/2);
        margin-top: 10px;
        bottom: 0;
        font-family: Clash Display;
        font-size: 52px;
        font-style: normal;
        text-align: left;
        font-weight: 700;
        line-height: normal;
        /* border: solid black 1px; */
    }
    
    .gl-message {
        color: #FFF;
        margin-top: 65px;
        height: 72.9px;
        width: 480px;
        /* border: solid red 1px; */
        margin-left: calc((100% - 480px)/2);
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: bold;
        text-align: left;
        line-height: 166%; /* 33.2px */
    }
    

    .button-div {
        height: fit-content;
        width: 310px;
        display: flex;
        justify-content: flex-start;
        margin-top: 35px;
        /* border: solid red 1px; */
        margin-left: 15px;
    }
    
    .count-down {
        margin-top: 25px;
        /* height: 75px; */
        height: 60px;
        /* width: 275px; */
        width: 220px;
        margin-left: 15px;
        /* border: 1px solid rgba(255, 255, 255, 0.18); */
    background: #140D27;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    }
    
    .time-value {
        color: #FFF;
    font-family: Unica One;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: 133%; /* 85.12px */
    }
    
    .time-unit {
        color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 133%; /* 18.62px */
    }

    .top-block {
        /* display: flex; */
        /* position: absolute; */
        /* flex-direction: row; */
        /* border: solid red 1px; */
        height: 60px;
        width: 1024px;
        margin-top: 50px;        
        margin-left: calc((100% - 1024px)/2);
        /* background-image: url('../assets/Vector\ 4.png');
        background-repeat: no-repeat;
        background-position: right bottom; */
    
    }

    .vector-4 {
        /* height: 9px; */
        height: 14.04px;
        /* width: 120px; */
        width: 187.2px;
        margin-left: calc(100% - 187.2px)
    }
    
    
    .t-block-msg {
        width: 100%;
        color: #FFF;
    font-family: Montserrat;
    font-size: 32px;
    font-style: italic;
    font-weight: bold;
    line-height: normal;
    /* align-self: flex-end; */
    text-align: right;
    }
    
    #get-link-div {
        display: block;
        box-sizing: border-box;
        /* box-sizing: border-box; */
        /* flex-direction: column; */
        /* position: relative; */
        height: 640px;
        width: 1024px;
        margin-left: calc((100% - 1024px)/2);
        /* border: solid black 1px; */
        /* margin: auto; */
        margin-top: 120px;
        margin-bottom: 0px;
        /* margin-top: 100px; */
        background-image: url('../assets/metrix\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        /* padding-left: 1%; */
        /* border-bottom: 2px solid rgba(255, 255, 255, 0.18); */
    }
    
   
    .bottom-block {
        height: 530px;
        display: block;
        box-sizing: border-box;
        width: 1024px;
        /* position: relative; */
        /* border: solid red 1px; */
    
    }
    
    .left-block {
        display: block;
        position: relative;
        width: 512px;
        height: 530px;
        /* box-sizing: border-box; */
        overflow: hidden;
        float: left;
        /* border: solid blue 1px; */
    }
    
    .right-block {
        display: block;
        position: relative;
        float: right;
        /* box-sizing: border-box; */
        margin-top: -530px;
        /* border: solid yellow 1px; */
        /* margin-top: 130px; */
        width: 512px;
        height: 530px;
        overflow: hidden;
        
    }

    .man-with-glasses {
        height: 100%;
        width: 100%;
    }
    
    .glow-web {
        position: absolute;
        /* width: 580px; */
        width: 372.48px;
        /* height: 500px; */
        /* height: 200px; */
        margin-top: 50px;
        margin-left: -450px;
    }
}
</style>