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
    <hr/>
</template>

<script>
    export default {
        name: 'RulesView',
        components: {

        },
    }
</script>

<style scoped>
@media screen and (min-width: 320px) {
    .rules {
    height: 698.1px;
    width: 310px;
    margin-left: calc((100% - 310px)/2);
    display: flex;
    /* border: solid red 1px; */
    flex-direction: column;
    justify-content: space-between;
    /* border-bottom: 2px solid rgba(255, 255, 255, 0.18); */

}

.rules-left {
    height: 349.05px;
    width: 310px;
    /* border: solid blue 1px; */
    /* display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; */
    position: relative;
}

.rules-right {
    height: 349.05px;
    width: 310px;
    /* border: solid green 1px; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.rules-left-flare {
    position: absolute;
    margin-top: -124px;
    margin-left: -46.5px;
    z-index: -1;
    /* width: 1037px; */
    width: 324.06px;
    /* height: 948px; */
    height: 296.25px;
    flex-shrink: 0;
    background-image: url('../assets/Purple-Lens-Flare-PNG\ Rules.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.rules-right-flare {
    position: absolute;
    width: 404px;
    /* width: 126.25px; */
    height: 959px;
    /* height: 299.69px; */
    flex-shrink: 0;
    z-index: -1;
    /* margin-top: -15%; */
    margin-top: 104.72px;
    /* margin-left: 37%; */
    margin-left: 96.88px;
    background-image: url('../assets/Purple-Lens-Flare-PNG\ Rules.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.rules-title {
    height: 60px;
    width: 300px;
    text-align: center;
    /* border: solid red 1px; */
    color: #FFF;
    font-family: Clash Display;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    margin-top: 15px;
    margin-left: calc((100% - 300px)/2);

}

.rules-title span {
    color: var(--violet);
    font-family: Clash Display;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
}

.rules-text {
    height: 165px;
    width: 280px;
    color: #FFF;
    font-family: Montserrat;
    font-size: 13px;
    margin-top: 10px;
    margin-left: calc((100% - 280px)/2);
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 196.429% */
}

.rules-img {
    height: 300px;
    width: 300px;
    background-image: url('../assets/7450159\ 1.png');
    background-repeat: no-repeat;
    background-size: contain;
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
}

@media screen and (min-width: 672px) {
    
}

@media screen and (min-width: 1024px) {
    .rules {
    height: 537px;
    width: 1024px;
    display: flex;
    /* border: solid red 1px; */
    margin-left: calc((100% - 1024px)/2);
    flex-direction: row-reverse;
    justify-content: space-between;
    /* border-bottom: 2px solid rgba(255, 255, 255, 0.18); */

}

.rules-left {
    height: 537px;
    width: 512px;
    position: relative;
}

.rules-right {
    height: 537px;
    width: 512px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rules-left-flare {
    position: absolute;
    margin-top: -409.6px;
    margin-left: -153.6px;
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
    margin-top: -153.6px;
    margin-left: 378.88px;
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
    margin-left: 51.2px;
    font-style: normal;
    font-weight: 700;
    text-align: left;

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
    width: 440px;
    margin-left: 51.2px;
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
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
    /* margin-left: 12.5%;
    margin-top: 30px; */
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
}

</style>