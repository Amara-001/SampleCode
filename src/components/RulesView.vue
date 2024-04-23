<template>
    <div class="rules">
        <div class="rules-right">
            <div class="rules-right-flare"></div>
            <div class="star-br"></div>
            <div class="rules-img"></div>
        </div>
        <div class="rules-left">
            <div class="rules-left-flare"></div>
            <div class="star-lt"></div>
            <p class="rules-title">
                Rules and <br/> 
                <span>Guidelines</span>
            </p>
            <p class="rules-text">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RulesView',
        components: {

        },
    }
</script>

<style scoped>
.rules {
    height: 537px;
    max-width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-bottom: 2px solid rgba(255, 255, 255, 0.18);

}

.rules-left {
    min-height: 100%;
    min-width: 50%;
    position: relative;
}

.rules-right {
    min-height: 100%;
    min-width: 50%;
    position: relative;
}

.rules-left-flare {
    position: absolute;
    margin-top: -40%;
    margin-left: -15%;
    z-index: -1;
    width: 1037px;
    height: 948px;
    flex-shrink: 0;
    background-image: url('../assets/Purple-Lens-Flare-PNG\ Rules.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.rules-right-flare {
    position: absolute;
    width: 404px;
    height: 959px;
    flex-shrink: 0;
    z-index: -1;
    margin-top: -15%;
    margin-left: 37%;
    background-image: url('../assets/Purple-Lens-Flare-PNG\ Rules.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.rules-title {
    height: 86px;
    width: 170px;
    margin-top: 100px;
    color: #FFF;
    font-family: Clash Display;
    font-size: 32px;
    margin-left: 10%;
    font-style: normal;
    font-weight: 700;

}

.rules-title span {
    color: #D434FE;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
}

.rules-text {
    height: 165px;
    width: 535px;
    margin-left: 10%;
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 196.429% */
    text-align: justify;
}

.rules-img {
    height: 477px;
    width: 477px;
    background-image: url('../assets/7450159\ 1.png');
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 12.5%;
    margin-top: 30px;
}

.star-lt {
    height: 32px;
    width: 26px;
    position: absolute;
    background-image: url('../assets/star\ \(1\).png');
    background-repeat: no-repeat;
    margin-left: 50%;
    margin-top: 85px;
}

.star-br {
    height: 32px;
    width: 26px;
    background-image: url('../assets/star.png');
    background-repeat: no-repeat;
    position: absolute;
    margin-left: 5%;
    margin-top: 400px;
}

@media screen and (max-width: 746px) {
    .rules {
        display: block;
        max-width: 100vw;
        height: fit-content;
    }    
}
</style>