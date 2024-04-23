<template>
    <div class="privacy">
        <div class="left-policy">
            <div class="policy-left-top">
                <p class="policy-title">
                    Privacy Policy and
                    <br/> 
                    <span>
                        Terms
                    </span>
                </p>
                <p class="policy-time">
                    Last updated on September 12, 2023
                </p>
                <p class="policy-text">
                    Below are our privacy & policy, which outline a lot of goodies. 
                    it’s our aim to always take of our participant
                </p>
            </div>
            <div class="policy-left-bottom">
                <div class="policy-detail-box">
                    <p class="detail-intro">
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                    </p>
                    <p class="detail-heading-1">Licensing Policy</p>
                    <p class="detail-heading-2">Here are terms of our Standard License:</p>
                    <ul class="detail-list">
                        <li class="detail-item">
                            The Standard License grants you a non-exclusive right to
                            navigate and register for our event
                        </li>
                        <li class="detail-item">
                            You are licensed to use the item available at any free source
                            sites, for your project developement
                        </li>
                    </ul>
                    <button class="detail-btn">Read More</button>
                </div>
            </div>
        </div>
        <div class="right-policy">
            <div class="policy-image-container">
                <div class="vector-lock"></div>
                <div class="lock-man"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PrivacyAndPolicy',
        components: {

        }
    }
</script>

<style scoped>
    .privacy {
        height: 1300px;
        max-width: 100%;
        /* border: solid yellow 1px; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid rgba(255, 255, 255, 0.18);

    }

    .left-policy {
        height: 100%;
        max-width: 55%;
        /* border: solid green 1px; */
    }

    .right-policy {
        height: 100%;
        max-width: 45%;
    }

    .policy-left-top {
        max-height: 30%;
        width: 100%;
    }

    .policy-left-bottom {
        max-height: 70%;
        width: 100%;
        /* border: solid blue 1px; */
    }

    .policy-title {
        height: 78px;
        width: 300px;
        margin-top: 10%;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        margin-left: 15%;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .policy-time {
        height: 28px;
        width: 258px;
        margin-left: 15%;
        color: rgba(255, 255, 255, 0.75);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    .policy-text {
        height: 52px;
        width: 438px;
        margin-left: 15%;
        color: rgba(255, 255, 255, 0.75);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    .policy-title span {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .policy-detail-box {
        height: 608px;
        width: 569px;
        margin-left: 15%;
        margin-top: 20%;
        border-radius: 5px;
        border: 1px solid #D434FE;
        background: rgba(217, 217, 217, 0.03);
    }

    .detail-intro {
        height: 180px;
        width: 425px;
        margin-left: 72px;
        margin-top: 35px;
        text-align: justify;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 216.4%;
    }

    .detail-heading-1 {
        height: 35px;
        width: 136px;
        color: #D434FE;
        margin-left: 72px;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 216.4%; /* 34.624px */
    }

    .detail-heading-2 {
        height: 30px;
        width: 291px;
        margin-left: 72px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 216.4%; /* 30.296px */
    }

    .detail-list {
        margin-left: 72px;
        height: fit-content;
        width: fit-content;
    }

    .detail-item {
        height: 60px;
        width: 423px;
        text-align: justify;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 216.4%; /* 30.296px */
        list-style-image: url('../assets/list\ terms.png');
    }

    .detail-btn {
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
        margin-top: 20px;
        margin-left: 198.5px;
    }

    .detail-btn:hover {
        background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
        color: yellow;
        height: 55px;
        width: 174px;
        margin-left: 197.5px;
    }

    .policy-image-container {
        height: 1005px;
        border: solid transparent 1px;
        position: relative;
        margin-top: 100px;
    }
    
    .vector-lock {
        height: 648px;
        width: 530px;
        position: absolute;
        background-image: url('../assets/Vector-lock.png');
        background-repeat: no-repeat;
        background-size: contain;        
        border: solid transparent 1px;
    }
    
    .lock-man {
        height: 749px;
        width: 559px;
        margin-top: 256px;
        background-image: url('../assets/08\ 1.png');
        background-repeat: no-repeat;
        background-size: contain;
        border: solid transparent 1px;
    }
</style>