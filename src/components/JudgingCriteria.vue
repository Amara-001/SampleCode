<template>
    <div class="criteria">
        <div class="criteria-left">
            <div class="pur-flare"></div>
            <div class="star-pur"></div>
            <div class="star-ltt"></div>
            <div class="ellipse"></div>
            <div class="starr"></div>
            <div class="judging-img"></div>
        </div>
        <div class="criteria-right">
            <div class="pur-right-flare"></div>
           <p class="judging-title">
                Judging Criteria <br/>
                <span>
                    Key attributes
                </span>
           </p>
           <p class="judging-list">
                <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.
           </p>
           <p class="judging-list">
                <span>Functionality:</span> Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
           </p>
           <p class="judging-list">
                <span>Impact and Relevance:</span> Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
           </p>
           <p class="judging-list">
                <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
           </p>
           <p class="judging-list">
                <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
           </p>
           <button class="read-more-btn">Read More</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JudgingCriteria',
        components: {

        }
    }
</script>

<style scoped>

    @media screen and (max-width: 320px) {
        
    }
   
    @media screen and (min-width: 320px) {
        .criteria {
        height: fit-content;
        /* border: solid red 1px; */
        width: 100%;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: center;
        gap: 10px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);
    }

    .criteria-left {
        height: 400px;
        width: 100%;
        position: relative;
        /* border: solid blue 1px; */
    }

    .criteria-right {
        height: 960px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        /* gap: 10px; */
        margin: 0px;
        position: relative;
        /* border: solid green 1px; */
    }

    .judging-img {
        width: 100%;
        height: 400px;
        /* border: solid red 1px; */
        background-image: url('../assets/8046554\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        /* margin-top: 230.5px; */
    }

    .star-pur {
        height: 36px;
        width: 30px;
        /* border: solid orange 1px; */
        background-image: url('../assets/star\ pu.png');
        background-repeat: no-repeat;
        position: absolute;
        margin-left: 20%;
        margin-top: 10px;
    }

    .star-ltt {
        width: 26px;
        height: 32px;
        position: absolute;
        background-image: url('../assets/star\ \(1\).png');
        background-repeat: no-repeat;
        margin-top: 500px;
        margin-left: 50%;
    }

    .ellipse {
        position: absolute;
        height: 134px;
        width: 134px;
        background-image: url('../assets/Ellipse\ 2.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 180px;
        margin-left: 12.5%;
        z-index: -1;
    }

    .starr {
        width: 26px;
        height: 32px;
        position: absolute;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        margin-top: 750px;
        margin-left: 80%;

    }

    .pur-flare {
        width: 100%;
        height: 500px;
        position: absolute;
        background-image: url('../assets/Purple-Lens-Flare-PNG4.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: hard-light;
        z-index: -1;
        margin-top: 217px;
        margin-left: -150px;

    }

    .pur-right-flare {
        width: 100%;
        height: 400px;
        position: absolute;
        background-image: url('../assets/Purple-Lens-Flare-PNG5.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: hard-light;
        z-index: -1;
        /* margin-left: -20px; */
        /* margin-top: 400px; */
    }

    .judging-title {
        height: 86px;
        width: 100%;
        color: #FFF;
        /* border: solid blue 1px; */
        font-family: Clash Display;
        font-size: 24px;
        font-style: normal;
        text-align: center;
        font-weight: 700;
        /* margin-left: 10%; */
        /* margin-top: 5px; */
    }

    .judging-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
    }

    .judging-list {
        height: 99px;
        width: 80%;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        text-align: justify;
        /* margin-left: 10%; */
    }

    .judging-list span {
        color: #FF26B9;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }

    .read-more-btn {
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 4px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
        height: 53px;
        width: 172px;
        cursor: pointer;
        border: none;
        color: white;
        /* margin-left: 10%; */
        /* margin-top: 20px; */
    }

    .read-more-btn:hover {
        background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
        color: yellow;
        height: 55px;
        width: 174px;
    }
    }

    @media screen and (min-width: 768px) {
        
        
    }

    @media screen and (min-width: 1024px) {
        .criteria {
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 35px;
        padding-bottom: 35px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);

    }

    .criteria-left {
        height: 100%;
        width: 50%;
        position: relative;
    }

    .criteria-right {
        height: 100%;
        width: 40%;
        position: relative;
        /* border: solid red 1px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0px
    }

    .judging-img {
        width: 100%;
        height: 587px;
        background-image: url('../assets/8046554\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 0px;
    }

    .star-pur {
        height: 36px;
        width: 30px;
        background-image: url('../assets/star\ pu.png');
        background-repeat: no-repeat;
        position: absolute;
        margin-left: 20%;
        margin-top: 100px;
    }

    .star-ltt {
        width: 26px;
        height: 32px;
        position: absolute;
        background-image: url('../assets/star\ \(1\).png');
        background-repeat: no-repeat;
        margin-top: 500px;
        margin-left: 50%;
    }

    .ellipse {
        position: absolute;
        height: 134px;
        width: 134px;
        background-image: url('../assets/Ellipse\ 2.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 180px;
        margin-left: 12.5%;
        z-index: -1;
    }

    .starr {
        width: 26px;
        height: 32px;
        position: absolute;
        background-image: url('../assets/star.png');
        background-repeat: no-repeat;
        margin-top: 750px;
        margin-left: 80%;

    }

    .pur-flare {
        width: 1037px;
        height: 948px;
        position: absolute;
        background-image: url('../assets/Purple-Lens-Flare-PNG4.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: hard-light;
        z-index: -1;
        margin-top: 217px;
        margin-left: -150px;

    }

    .pur-right-flare {
        width: 1037px;
        height: 948px;
        position: absolute;
        background-image: url('../assets/Purple-Lens-Flare-PNG5.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: hard-light;
        z-index: -1;
        margin-left: -20px;
        margin-top: 400px;
    }

    .judging-title {
        height: 86px;
        width: 80%;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        text-align: left;
        /* margin-left: 10%; */
        /* margin-top: 40px; */
    }

    .judging-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }

    .judging-list {
        height: fit-content;
        width: 80%;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        text-align: justify;
        /* margin-left: 10%; */
    }

    .judging-list span {
        color: #FF26B9;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
    }

    .read-more-btn {
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 4px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
        height: 53px;
        width: 172px;
        cursor: pointer;
        border: none;
        color: white;
        /* margin-left: 10%; */
        margin-top: 20px;
    }

    .read-more-btn:hover {
        background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
        color: yellow;
        height: 55px;
        width: 174px;
    }
    }
</style>