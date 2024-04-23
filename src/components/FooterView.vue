<template>
    <div class="footer">
        <div class="footer-top">
            <div class="footer-top-left">
                <p class="text-title">get<span>linked</span></p>
                <p class="text-detail">
                    Getlinked Tech Hackathon is a technology
                    innovation program established by a group 
                    of organizations with the aim of showcasing 
                    young and talented individuals in the field 
                    of technology
                </p>
                <p class="terms">Terms of Use &nbsp;  <span>|</span> &nbsp;  Privacy Policy</p>
            </div>
            <div class="footer-top-right">
                <div class="right-left">
                    <p class="link-heading">Useful Links</p>
                    <p class="link-item">Overview</p>
                    <p class="link-item">Timeline</p>
                    <p class="link-item">FAQs</p>
                    <p class="link-item">Register</p>
                    <div class="follow-us">
                        <p class="follow-text">Follow us</p>
                        <div id="instagram" class="follow-icon"></div>
                        <div id="twitter" class="follow-icon"></div>
                        <div id="facebook" class="follow-icon"></div>
                        <div id="linkedin" class="follow-icon"></div>
                    </div>
                </div>
                <div class="right-right">
                    <p class="contact-us">Contact Us</p>
                    <ul class="telephone">
                        <li class="phone-number">+234 6707653444</li>
                    </ul>
                    <ul class="address">
                        <li class="address-detail">
                            27,Alara Street
                            Yaba 100012
                            Lagos State
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="rights-reserved">All rights reserved. © getlinked Ltd.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterView',
        components: {

        }
    }
</script>

<style scoped>
    .footer {
        height: 380px;
        max-width: 100%;
        /* border-bottom: solid red 1px; */
        margin-bottom: 0px;
    }

    .footer-top {
        max-height: 90%;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

    }

    .footer-top-left {
        height: 100%;
        width: 50%;        
        /* border: solid red 1px; */
    }
    
    .footer-top-right {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        /* border: solid red 1px; */
    }

    .footer-bottom {
        max-height: 10%;
        width: 100%;
    }

    .text-title {
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: 10%;
    }

    .text-title span {
        color: #D434FE;
    }
    
    .text-detail {
        height: 105px;
        width: 412px;
        text-align: justify;
        margin-left: 10%;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 172.4%; /* 20.688px */
    }
    
    .terms {
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        margin-top: 5%;
        margin-left: 10%;
        font-weight: 400;
        line-height: 172.4%; /* 20.688px */
    }
    .terms span {
        color: #D434FE;
    }

    .rights-reserved {
        color: #FFF;
        font-family: Montserrat;
        text-align: center;
        font-size: 12px;
        margin-top: 3.5%;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .right-left {
        max-height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding-top: 5%;        
    }
    
    .right-right {
        padding-top: 5%;        
        max-height: 100%;
        width: 50%;        
    }

    .link-heading {
        color: #D434FE;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 172.4%; /* 24.136px */
    }

    .link-item {
        color: #FFF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 172.4%; /* 20.688px */
    }

    .follow-us {
        height: 24px;
        width: 250px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .follow-text {
        color: #D434FE;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .follow-icon {
        height: 24px;
        width: 24px
    }

    #instagram {
        background-image: url('../assets/mdi_instagram.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    #twitter {
    background-image: url('../assets/twitter-Vector.png');
    background-repeat: no-repeat;
    background-size: contain;
    
}

#facebook {
        background-image: url('../assets/facebook-Vector.png');
        background-repeat: no-repeat;
        background-size: contain;
        
    }
    
    #linkedin {
        background-image: url('../assets/ri_linkedin-fill.png');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .contact-us {
        height: 24px;
        width: 80px;
        color: #D434FE;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 172.4%; /* 24.136px */
    }

    .telephone {
        height: 15px;
        width: 133px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: -7.5%;
        margin-top: 10%;
        
    }

    .phone-number {
        list-style-image: url('../assets/Group.png');
    }
    
    .address {
        height: 57px;
        width: 119px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: -7.5%; 
        margin-top: 10%;       
    }
    
    .address-detail {
        list-style-image: url('../assets/Location-Vector.png');
    }
</style>