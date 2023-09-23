<template>
    <div class="header">
        <div class="header-title">
            <p id="title-pt1">get<span id="title-pt2">linked</span></p>
        </div>
        <div class="header-tabs">
            <div class="tab-item"><a href="#">Timeline</a></div>
            <div class="tab-item"><a href="#">Overview</a></div>
            <div class="tab-item"><a href="#">FAQs</a></div>
            <div class="tab-item"><a href="#">Contact</a></div>
            <div><ButtonView /></div>
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

    }
</script>

<style scoped>

.header {
    display: flex;
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
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

.tab-item a:hover {
    color: yellow;
}

</style>