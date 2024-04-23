<template>
    <div class="header">
        <div class="large-header">
            <router-link to="/">
                <div class="header-title">
                    <p id="title-pt1">get<span id="title-pt2">linked</span></p>
                </div>
            </router-link>
            <div class="header-tabs">
                <div class="tab-item"><a href="#">Timeline</a></div>
                <div class="tab-item"><a href="#">Overview</a></div>
                <div class="tab-item"><a href="#">FAQs</a></div>
                <div class="tab-item"><router-link to="/contact">Contact</router-link></div>
                <div><router-link to="/register"><ButtonView /></router-link></div>
            </div>
        </div>
        <div class="small-header">
            <div v-show="this.showSmallNav" class="nav-container">
                <div @click="this.handleCloseSmallNav()" class="close-btn"></div>
            </div>
            <router-link to="/">
                <div class="header-title">
                    <p id="title-pt1">get<span id="title-pt2">linked</span></p>
                </div>
            </router-link>
            <div @click="this.handleOpenSmallNav()" class="navpill"></div>
        </div>
    </div>
    <hr/>
    
</template>

<script>
    import ButtonView from './ButtonView.vue'
    export default {
        name: 'HeaderView',
        components: {
            ButtonView            
        },
        data () {
            return {
                showSmallNav: false,
            }
        },
        methods: {
            handleCloseSmallNav () {
                this.showSmallNav = false;
            },

            handleOpenSmallNav () {
                this.showSmallNav = true;
            }
        }

    }
</script>

<style scoped>

.header {
    height: fit-content;
    max-width: 100%;
}

.large-header {
    display: flex;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
}

.small-header {
    display: none;
}

#title-pt1 {
    color: #FFF;
font-family: Clash Display;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

#title-pt2 {
    color: #D434FE;
font-family: Clash Display;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.header-title {
    cursor: pointer;
    margin: 0;
}

.header-tabs {
    height: 53px;
    width: 716px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}


.tab-item {
    cursor: pointer;
    color: white;
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.tab-item a {
    color: white;
    text-decoration: none;
}

a {
    text-decoration: none;
}

.tab-item a:hover {
    color: yellow;
}



@media  screen  and (max-width: 746px) {
    .large-header {
        display: none;
    }

    .small-header {
        display: block;
    }

    .navpill {
        width: 19px;
        height: 14px;
        background-image: url('../assets/Nav\ Pills.png');
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
    }

    .nav-container {
        position: absolute;
        width: 348px;
        height: 492px;
        margin-top: 320px;
        margin-left: 48.5%;
        border-radius: 8px;
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background: #150E28;
        backdrop-filter: blur(30px);
        z-index: 1;
    }

    .close-btn {
        height: 23px;
        width: 23px;
        margin-top: 25px;
        margin-left: 85%;
        /* border: solid 3px linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); */
        /* border-radius: 11.5px; */
        background-image: url('../assets/Group\ 1.png'), url('../assets/Vector.png');
        background-repeat: no-repeat no-repeat;
        background-size: contain contain;
        background-position: center center;
        cursor: pointer;
    }

    .small-header {
        position: relative;
        height: 55.25px;
        padding-top: -25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 100vw;
        padding-left: 5%;
        padding-right: 5%;
        /* border: solid red 2px; */
    }
}

@media screen and (max-width: 414px) {
    .nav-container {
        margin-left: 7.5%;
    } 
}

</style>