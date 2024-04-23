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
    .criteria {
        min-height: 1028px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);

    }

    .criteria-left {
        min-height: 100%;
        min-width: 60%;
        position: relative;
    }

    .criteria-right {
        min-height: 100%;
        min-width: 40%;
        position: relative;
    }

    .judging-img {
        width: 710px;
        height: 587px;
        background-image: url('../assets/8046554\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 230.5px;
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
        width: 267px;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        margin-left: 10%;
        margin-top: 90px;
    }

    .judging-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }

    .judging-list {
        height: 99px;
        max-width: 80%;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        text-align: justify;
        margin-left: 10%;
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
        margin-left: 10%;
        margin-top: 20px;
    }

    .read-more-btn:hover {
        background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
        color: yellow;
        height: 55px;
        width: 174px;
    }

    @media screen and (max-width: 746px) {
        .criteria {
            display: block;
            max-width: 100vw;
            height: fit-content;
        }

        .criteria-left {
            max-width: 100vw;
        }

        .criteria-right {
            max-width: 100vw;
        }
        
    }
</style>