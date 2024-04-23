<template>
    <div id="get-link-div">
        <div class="top-block">
            <p class="t-block-msg">Igniting a Revolution in HR Innovation</p>
        </div>
        <div class="bottom-block">
            <div class="left-block">
                <div class="star"></div>
                <div class="star-lt-1"></div>
                <div class="get-linked-contain">
                    <div class="bulb"></div>
                    <div class="chain"></div>
                    <div class="fire-star"></div>
                    <div class="text-title">
                        <p class="gl-tech">getlinked Tech</p>
                        <p class="hackathon">Hackthon <span class="hct-1">1.0</span></p>
                </div>
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
                <div class="star-lt-2"></div>
                <div class="glow-web"></div>
            </div>
        </div>
    </div>
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

.star {
    width: 26px;
    height: 32px;
    margin-left: 185px;
    background-image: url('../assets/star.png');
}

.bulb {
    width: 53px;
    height: 73px;
    margin-left: 430px;
    margin-top: 50px;
    background-image: url('../assets/Creative\ 1.png');
}
.chain {
    position: absolute;
    width: 86px;
    height: 72px;
    margin-left: 455px;
    margin-top: 60px;
    background-image: url('../assets/chain-9365116-7621444.png');
    background-repeat: no-repeat;
}
.fire-star {
    position: absolute;
    width: 86px;
    height: 72px;
    margin-left: 545px;
    margin-top: 70px;
    background-image: url('../assets/1f4a5.png');
    background-repeat: no-repeat;
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

.gl-tech {
    color: #FFF;
    margin: -15px;
    top: 0;
    bottom: 0;
    font-family: Clash Display;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.gl-message {
    color: #FFF;
    margin: 0;
    height: 66px;
    width: 522px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 166%; /* 33.2px */
}

.hackathon {
    color: #FFF;
    margin: 0;
    top: 0;
    bottom: 0;
    font-family: Clash Display;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    /* line-height: normal; */

}

.hct-1 {
    color: #D434FE;
    margin: 0;
font-family: Clash Display;
font-size: 70px;
font-style: normal;
font-weight: 700;
/* line-height: normal; */
}

.count-down {
    margin-top: 40px;
    height: 75px;
    width: 275px;
    border: 1px solid rgba(255, 255, 255, 0.18);
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

.t-block-msg {
    min-width: 100%;
    color: #FFF;
font-family: Montserrat;
font-size: 36px;
font-style: italic;
font-weight: 700;
line-height: normal;
align-self: flex-end;
text-align: right;
}

#get-link-div {
    display: flex;
    flex-direction: column;
    /* position: relative; */
    height: 650px;
    max-width: 100%;
    /* margin: auto; */
    margin-bottom: -10px;
    margin-top: 35px;
    background-image: url('../assets/metrix\ 1.png');
    background-repeat: no-repeat;
    background-size: contain;
    padding-left: 1%;
    border-bottom: 2px solid rgba(255, 255, 255, 0.18);
}

.top-block {
    display: flex;
    flex-direction: row;
    max-height: 10%;
    max-width: 98%;
    background-image: url('../assets/Vector\ 4.png');
    background-repeat: no-repeat;
    background-position: right bottom;

}

.bottom-block {
    max-height: 90%;
    max-width: 98%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.left-block {
    max-width: 45%;
    min-height: 100%;
    overflow: overflow;
    display: block;
    position: relative;

}

.right-block {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 130px;
    max-width: 55%;
    min-height: 100%;
    overflow: none;
    background-image: url('../assets/man-wearing-smart-glasses-touching-virtual-screen\ 1.png');
    background-repeat: no-repeat;
    background-size: contain;
}

.glow-web {
    width: 580px;
    height: 500px;
    margin-top: -50px;
    background-image: url('../assets/Image\ 1.png');
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    margin-bottom: 75px;
}


.button-div {
    margin-top: 30px;
}


@media  screen  and (max-width: 746px) {
    .bottom-block {
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
    }
    

}
</style>