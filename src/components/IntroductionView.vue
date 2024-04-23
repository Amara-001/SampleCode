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
</template>

<script>
    export default {
        name: 'IntroductionView',
        components: {

        }
    }
</script>

<style scoped>
    .intro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 640px;
        max-width: 100%;
        margin-top: 5px;
        margin-bottom: 0px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);


    }

    .left-intro {
        min-width: 50%;
        height: 100%;
        position: relative;
    }

    .right-intro {
        position: relative;
        min-width: 50%;
        height: 100%;

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
        margin-top: 81.5px;
        margin-left: 25%;
        /* margin: 0 auto; */
        background-image: url('../assets/the\ big\ idea\ 1.png');
        background-repeat: no-repeat; 
        border: solid 1px transparent;
    }

    .big-idea-text {
        width: 144.843px;
        height: 59.754px;
        text-align: center;
        margin-top: 208.623px;
        margin-left:172.579px;
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
        width: 398px;
        margin-top: 193px;
        margin-left: 10%;
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
        width: 535px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        margin-left: 10%;
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

    @media screen and (max-width: 746px) {
        .intro {
            display: block;
            max-width: 100vw;
            height: fit-content;
            /* text-align: center; */
        }

        .left-intro {
            max-width: 100vw;
        }

        .right-intro {
            max-width: 100vw;
        }
        
    }
</style>