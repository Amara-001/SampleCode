<template>
    <div class="intro">
        <div class="left-intro">
            <div class="sm-star"></div>
            <div class="big-idea">
                <p class="big-idea-text">
                    The Big <br/>
                    Idea!
                </p>
            </div>
            <div class="arrow"></div>
        </div>
        <div class="right-intro">
            <p class="intro-title">
                Introduction to getlinked <br/>
                <span>tech Hackathon 1.0</span>
            </p>
            <p class="intro-text">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
            </p>
            <div class="star-purple"></div>
        </div>
    </div>
    <hr/>
</template>

<script>
    export default {
        name: 'IntroductionView',
        components: {

        }
    }
</script>

<style scoped>
@media screen and (min-width: 320px) {
    .intro {
        height: 832px;
        width: 320px;
        margin-left: calc((100% - 320px)/2);
        margin-bottom: 0px;
        /* border: solid red 1px; */
        /* border-bottom: 2px solid rgba(255, 255, 255, 0.18); */


    }

    .left-intro {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 310px;
        height: 416px;
        /* border: solid blue 1px; */
        margin-left: calc((100% - 310px)/2);
        position: relative;
    }

    .right-intro {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 310px;
        height: 416px;
        /* border: solid yellow 1px; */
        margin-left: calc((100% - 310px)/2);

    }

    .sm-star {
        position: absolute;
        width: 21px;
        height: 25px;
        background-image: url('../assets/sata\ gra.png');
        background-repeat: no-repeat;
        margin-top: 223px;
        margin-left: 75px;
    }

    .big-idea {
        width: 310px;
        height: 301.78px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin: 0 auto; */
        background-image: url('../assets/the\ big\ idea\ 1.png');
        background-repeat: no-repeat; 
        background-position: center;
        background-size: contain;
        /* border: solid 1px red; */
    }

    .big-idea-text {
        width: 91.64px;
        height: 59.754px;
        text-align: center;
        align-content: center;
        /* border: solid green 1px; */
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: bold;
        line-height: 122.5%; /* 29.4px */
    }

    .intro-title {
        height: 26.88px;
        width: 260px;
        /* margin-top: 193px; */
        /* margin-left: 10%; */
        /* border: solid red 1px; */
        color: #FFF;
        font-family: Clash Display;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        font-weight: 700;
    }

    .intro-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
     
    }

    .intro-text {
        height: fit-content;
        width: 280px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        /* margin-left: 10%; */
        text-align: justify;
    }

    .arrow {
        height: 57.97px;
        width: 49.43px;
        position: absolute;
        background-image: url('../assets/arrow.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -35px;
        margin-left: 95%;
    }

    .star-purple {
        height: 36px;
        width: 30px;
        background-image: url('../assets/star\ pu.png');
        background-repeat: no-repeat;
        position: absolute;
        margin-top: -280px;
        margin-left: 85%;
    }
}

@media screen and (min-width: 672px) {
    
}

@media screen and (min-width: 1024px) {
   .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 640px;
        width: 1024px;
        margin-left: calc((100% - 1024px)/2);
        /* margin-top: 5px;
        margin-bottom: 0px; */
        /* border-bottom: 2px solid rgba(255, 255, 255, 0.18); */


    }

    .left-intro {
        width: 512px;
        height: 640px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px;
    }

    .right-intro {
        position: relative;
        display: block;
        /* display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center; */
        width: 512px;
        height: 640px;
        margin: 0px;

    }

    .sm-star {
        position: absolute;
        width: 21px;
        height: 25px;
        background-image: url('../assets/sata\ gra.png');
        background-repeat: no-repeat;
        margin-top: 223px;
        margin-left: 75px;
    }

    .big-idea {
        width: 490px;
        height: 477px;
        /* margin-top: 81.5px;
        margin-left: 25%; */
        /* margin: 0 auto; */
        background-image: url('../assets/the\ big\ idea\ 1.png');
        background-repeat: no-repeat; 
        border: solid 1px transparent;
    }

    .big-idea-text {
        width: 144.843px;
        height: 59.754px;
        text-align: center;
        /* margin-top: 208.623px;
        margin-left:172.579px; */
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 122.5%; /* 29.4px */
    }

    .intro-title {
        height: 86px;
        width: 420px;
        margin-top: 180px;
        text-align: left;
        margin-left: calc((100% - 420px)/2);
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }

    .intro-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
     
    }

    .intro-text {
        height: 165px;
        width: 420px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        margin-left: calc((100% - 420px)/2);
        margin-top: 30px;
        text-align: justify;
    }

    .arrow {
        height: 57.97px;
        width: 49.43px;
        position: absolute;
        background-image: url('../assets/arrow.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: -35px;
        margin-left: 95%;
    }

    .star-purple {
        height: 36px;
        width: 30px;
        background-image: url('../assets/star\ pu.png');
        background-repeat: no-repeat;
        position: absolute;
        margin-top: -280px;
        margin-left: 85%;
    }
}
</style>