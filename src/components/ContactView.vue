<template>
    <div class="contact">
        <div class="cover-flaw"></div>
        <div class="contact-left">
            <div class="contact-left-container">
                <p class="get-in-touch">Get in touch</p>
                <p class="in-touch-text">
                    Contact <br/>
                    <span>Information</span>
                </p>
                <p class="in-touch-text">
                    27,Alara Street <br/>
                    <span>Yaba 100012</span> <br/>
                    <span>Lagos State</span>
                </p>
                <p class="in-touch-text">Call Us : 07067981819</p>
                <p class="in-touch-text">
                    we are open from Monday-Friday <br/>
                    <span>08:00am - 05:00pm</span>
                </p>
                <p class="share-on">Share on</p>
                <div class="social-container">
                    <div class="contact-instagram"></div>
                    <div class="contact-twitter"></div>
                    <div class="contact-facebook"></div>
                    <div class="contact-linkedin"></div>
                </div>
            </div>
        </div>
        <div class="contact-right">
            <div class="contact-form-container">
                <p class="contact-form-title">
                    Questions or need assistance? <br/>
                    <span>Let us know  about it!</span>
                </p>
                <div class="input-set">
                    <input class="contact-text" type="text" placeholder="First Name"/>
                    <input class="contact-text" type="email" placeholder="Mail"/>
                    <textarea class="contact-long-text"  placeholder="Message">
                        
                    </textarea>
                    <input type="submit" value="Submit" class="contact-btn"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactView',
        components: {

        }
    }
</script>

<style scoped>
    .contact {
        height: 788px;
        max-width: 100%;
        /* border: solid 1px yellow; */
        display: flex;
        flex-direction: row;
        position: relative;
        
    }

    .cover-flaw {
        position: absolute;
        background-color: #150e28;
        height: 100px;
        width: 250px;
        margin-top: 550px;
        margin-left: 800px;
        z-index: -1;
    }
    
    .contact-left {
        height: 100%;
        width: 45%;
        /* border: solid 1px green; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .contact-right {
        height: 100%;
        width: 55%;
        /* border: solid 1px green; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .contact-left-container {
        height: 40%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .get-in-touch {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .in-touch-text {
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .share-on {
        color: #D434FE;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .social-container {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }

    .contact-instagram {
        width: 24px;
        height: 24px;
        background-image: url('../assets/mdi_instagram.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .contact-twitter {
        width: 19px;
        height: 17px;
        background-image: url('../assets/twitter-Vector.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
   
    .contact-facebook {
        width: 10.5px;
        height: 20px;
        background-image: url('../assets/facebook-Vector.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .contact-linkedin {
        width: 24px;
        height: 24px;
        background-image: url('../assets/ri_linkedin-fill.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .contact-form-container {
        width: 617px;
        height: 611px;
        flex-shrink: 0;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 30px;
        /* padding-left: 90px; */
    }

    .contact-form-title {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .contact-text {
        width: 437px;
        height: 47px;
        flex-shrink: 0;
        padding-left: 15px;
        border-radius: 4px;
        border: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-long-text {
        width: 437px;
        height: 119px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-left: 15px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-btn {
        width: 172px;
        height: 53px;
        flex-shrink: 0;
        border-radius: 4px;
        cursor: pointer;
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
    }

    .contact-btn:hover {
        background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
        color: yellow;
        /* height: 55px;
        width: 82%;
        margin-left: 9%; */
    }

    .input-set {
        height: 80%;
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>