<template>
    <div class="register">
        <div class="cover-flaw"></div>
        <div v-show="this.shouldBlur" class="success-alert">
            <div class="alert-img-container">
                <div class="approval-mark"></div>
                <div class="jumping-man"></div>
            </div>
            <p class="congrat-text">
                Congratulations <br/>
                <span>you have successfully Registered</span>
            </p>
            <p class="congrat-text-sm">
                Yes, it was easy and you did it! <br/>
                <span>
                    check your mail box for next step
                </span>
            </p>
            <br/>
            <button @click="hideSuccessAlert()"  class="alert-back-btn">Back</button>
        </div>
        <div :class="!this.shouldBlur ? 'register-left' : 'register-left blur-this'"></div>
        <div :class="!this.shouldBlur ? 'register-right' : 'register-right blur-this'">
            <div class="register-box">
                <form class="inner-register-box">
                    <p class="form-title">
                        Register
                    </p>
                    <div class="be-part-div">
                        <div class="be-part-left">
                            <p class="be-part-text">Be part of this movement!</p>
                        </div>
                        <div class="be-part-right">
                            <div class="be-part-female"></div>
                            <div class="be-part-male"></div>
                        </div>
                    </div>
                    <p class="create-account">CREATE YOUR ACCOUNT</p>
                    <div class="input-box">
                        <div class="input-container">
                            <label>Team’s Name</label>
                            <input type="text" placeholder="Enter the name of your group"/>
                        </div>
                        <div class="input-container">
                            <label>Phone</label>
                            <input type="text" placeholder="Enter your phone number"/>
                        </div>
                        <div class="input-container">
                            <label>E-Mail</label>
                            <input type="email" placeholder="Enter your email address"/>
                        </div>
                        <div class="input-container">
                            <label>Project Topic</label>
                            <input type="text" placeholder="What is your group project topic"/>
                        </div>                        
                        <div class="input-container">
                            <label>Category</label>
                            <select placeholder="Select your category">
                                <option>Select your category</option>                                
                            </select>
                        </div>
                        <div class="input-container">
                            <label>Group Size</label>
                            <select placeholder="Select">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                    <p class="please-review">Please review your registration details before submitting</p>
                    <div class="register-checkbox">
                        <input class="register-check" type="checkbox">
                        <p class="check-message">I agreed with the event <a href="#">terms and conditions  and privacy policy</a></p>
                    </div>
                    <input type="submit" class="register-submit">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegisterView',
        components: {

        },
        data () {
            return {
                shouldBlur: true,
            }
        },
        methods: {
            hideSuccessAlert () {
                this.shouldBlur = false;
            }           
        }
    }
</script>

<style scoped>
    .register {
        height: 788px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;     
        position: relative;  
        /* opacity: 20%;  */
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

    .register-left {
        height: 100%;
        width: 45%;
        background-image: url('../assets/3d-graphic-designer-showing-thumbs-up-png\ 1.png');
        background-repeat: no-repeat;
        background-size:auto;
    }

    .register-right {
        height: 100%;
        width: 55%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .register-box {
        width: 90%;
        height: 740px;
        flex-shrink: 0;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .inner-register-box {
        height: 85%;
        width: 85%;
        /* border: solid yellow 1px; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .form-title {
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .be-part-div {
        width: 286px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
               

    }

    .be-part-left {
        height: 100%;
        width: 70%;
       
    }
    .be-part-left p {
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .be-part-right {
        height: 100%;
        width: 30%;
        border-bottom: solid #D434FE 1px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .create-account {
        color: #FFF;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .input-box {
        max-width: 100%;
        height: 280px;
        /* border: solid green 1px; */
        /* display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap; */
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 30% 30% 30%;
        /* grid-template-rows: 33.33% 33.33% 33.33%; */
        padding: auto;
        grid-column-gap: 5%;
        grid-row-gap: 5%;
        /* align-items: center; */
    }

    .input-container {
        height: 81px;
        width: 90%;
        padding: auto;
    }

    .input-container label {
        height: 17px;
        margin: auto;
        width: fit-content;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .input-container input {
        margin: auto;
        width: 100%;
        height: 47px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: rgba(255, 255, 255, 0.25);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .input-container select {
        margin: auto;
        width: 100%;
        height: 47px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: rgba(255, 255, 255, 0.25);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .be-part-female {
        width: 26px;
        height: 26px;
        flex-shrink: 0;
        background-image: url('../assets/1f6b6-2640.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .be-part-male {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        background-image: url('../assets/image_processing20200511-10310-13mnlsx.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .please-review {
        color: #FF26B9;
        font-family: Montserrat;
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }

    .register-checkbox {
        height: 20px;
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .register-check {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        border-radius: 2px;
        border: 1px solid #FFF;
    }

    .check-message {
        color: #FFF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .register-submit {
        width: 100%;
        height: 53px;
        flex-shrink: 0;
        border-radius: 4px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;    
    }

    .register-submit:hover {
        color: yellow;
    }

    .check-message a {
        color: white;
    }

    .success-alert {
        position: absolute;
        width: 699px;
        height: 664px;
        margin-left: calc((100vw - 699px)/2);
        margin-top: 50px;
        flex-shrink: 0;
        border-radius: 5px;
        border: 1px solid #D434FE;
        background: rgba(255, 255, 255, 0.01);
        z-index: 1;
    }

    .alert-img-container {
        position: relative;
        height: 315px;
        width: 450px;
        margin-left: 124.5px;
        margin-top: 35px;
        /* border: solid yellow 1px; */
    }

    .approval-mark {
        height: 315px;
        width: 280px;
        position: absolute;
        background-image: url('../assets/successfully-done-5108472-4288033\ 1.png');
        background-repeat: no-repeat;
        background-size: cover;
        
    }
    
    .jumping-man {
        height: 315px;
        width: 280px;
        margin-left: 135px;
        position: absolute;
        background-image: url('../assets/successful-man-3025713-2526911\ 1.png');
        background-repeat: no-repeat;
        background-size: cover;

    }

    .blur-this {
        opacity: 4%;
    }

    .congrat-text {
        color: #FFF;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }

    .congrat-text-sm {
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }

    .alert-back-btn {
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 4px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
        height: 53px;
        width: 80%;
        margin-left: 10%;
        cursor: pointer;
        border: none;
        color: white;
    }

    .alert-back-btn:hover {
        background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
        color: yellow;
        height: 55px;
        width: 82%;
        margin-left: 9%;
    }
</style>