<template>
    <div class="time-line">
        <div class="time-line-title">
            <p class="time-bold">
                Timeline
            </p>
            <p class="time-text">
                Here is the breakdown of the time we anticipate 
                using for the upcoming event.
            </p>
        </div>
        <div class="time-line-details">
            <div  class="left-details">
                <div v-for="item in leftData" :key="item.id" class="left-item-container">
                    <p class="item-title">{{ item.textTitle }}</p>
                    <p class="item-text">{{ item.textDetail }}</p>
                </div>
            </div>
            <div  class="center-details">
                <br/>
                <div v-for="count in this.counts" :key="count[index]"  class="circle-line-container">
                    <div class="line"></div>
                    <br/>
                    <div class="circle"><p>{{count}}</p></div>
                    <br/>
                </div>
            </div>
            <div class="right-details">
                <div v-for="item in rightData" :key="item.id" class="left-item-container">
                    <p class="item-title-right">{{ item.textTitle }}</p>
                    <p class="item-text-right">{{ item.textDetail }}</p>
                </div>
            </div>
        </div>
    </div>
    <hr/>
</template>

<script>
    export default {
        name: 'TimeLine',
        components: {

        },
        data () {
            return {
                counts: [1, 2, 3, 4, 5, 6],
                leftData: [
                    {
                        id: 1,
                        textTitle: "Hackathon Announcement",
                        textDetail: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
                    },
                    {
                        id: 2,
                        textTitle: "November 18, 2023",
                        textDetail: "",
                    },
                    {
                        id: 3,
                        textTitle: "Teams Registration ends",
                        textDetail: "Interested Participants are no longer Allowed to register",
                    },
                    {
                        id: 4,
                        textTitle: "November 18, 2023",
                        textDetail: "",
                    },
                    {
                        id: 5,
                        textTitle: "Getlinked Hackathon 1.0 Offically Begins",
                        textDetail: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
                    },
                    {
                        id: 6,
                        textTitle: "November 18, 2023",
                        textDetail: "",
                    },
                ],
                rightData: [
                    {
                        id: 1,
                        textTitle: "November 18, 2023",
                        textDetail: "",
                    },
                    {
                        id: 2,
                        textTitle: "Teams Registration begins",
                        textDetail: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
                    },
                    {
                        id: 3,
                        textTitle: "November 18, 2023",
                        textDetail: "",
                    },
                    {
                        id: 4,
                        textTitle: "Announcement of the accepted teams and ideas",
                        textDetail: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
                    },
                    {
                        id: 5,
                        textTitle: "November 18, 2023",
                        textDetail: "",
                    },
                    {
                        id: 6,
                        textTitle: "Demo Day",
                        textDetail: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .time-line {
        height: 1880px;
        max-width: 100%;
        /* border: solid yellow 1px; */
    }
    
    .time-line-title {
        /* border: solid yellow 1px; */
        max-height: 137px;
        max-width: 80%;
        margin-top: 81px;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 20px;
    }
    
    .time-line-details {
        /* border: solid yellow 1px; */
        height: 1400px;
        max-width: 80%;   
        margin-top: 85px;  
        margin-left: 10%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .time-bold {
        height: 43px;
        width: 138px;
        text-align: center;
        color: #FFF;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
    }

    .time-text {
        height: 48px;
        width: 346px;
        text-align: center;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    .left-details {
        height: 100%;
        min-width: 45%;
        /* border: solid yellow 1px; */
        
    }
    
    .center-details {
        height: 100%;
        min-width: 10%;
        /* border: solid yellow 1px; */
        display: flex;
        flex-direction: column;
     
    }
    
    .right-details {
        height: 100%;
        min-width: 45%;
        /* border: solid yellow 1px; */

    }

    .line {
        width: 4px;
        height: 137px;
        background: #D434FE;
    }

    .circle {
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
        background: linear-gradient(270deg, #903AFF 0%, #D434FE 100%);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .circle-line-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: space-between;
    }
    .circle p {
        text-align: center;
        color: #FFF;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .item-title {
        height: 29px;
        width: 100%;
        text-align: right;
        padding-right: 0px;
        margin-top: 140px;
        color: #D434FE;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .item-text {
        height: 48px;
        width: 436px;
        text-align: right;
        /* margin-bottom: 120px; */
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
    .item-title-right {
        height: 29px;
        width: 100%;
        text-align: left;
        padding-right: 0px;
        margin-top: 140px;
        color: #D434FE;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .item-text-right {
        height: 48px;
        width: 436px;
        /* margin-bottom: 120px; */
        color: #FFF;
        text-align: left;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
</style>