<template>
    <div v-for="question in this.questions" :key="question.id" class="expandable-questions">
        <div @click="handleExpandClick(question.id)" class="question-container">
            <div class="main-question">
                <p  :class="question.showAnswer ? 'the-read-question' : 'the-question'">{{ question.data }}</p>
                <p  class="expand-btn">{{ question.showAnswer ? "-" : "+" }}</p>
            </div>
            <div v-show="question.showAnswer" class="answer-to-question">{{ question.answer }}</div>
        </div>        
    </div>
</template>

<script>
    export default {
        name: 'AskedQuestions',
        components: {

        },
        data () {
            return {
                questions:[
                    { 
                        id: 1,
                        data: "Can I work on a project I started before the hackathon?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        showAnswer: false                   
                    },
                    { 
                        id: 2,
                        data: "What happens if I need help during the hackathon?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        showAnswer: false                    
                    },
                    { 
                        id: 3,
                        data: "What happens if I don't have an idea for a project?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        showAnswer: false                    
                    },
                    { 
                        id: 4,
                        data: "Can I join a team or do I have to come with one?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        showAnswer: false                    
                    },
                    { 
                        id: 5,
                        data: "What happens after the hackathon ends?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        showAnswer: false                    
                    },
                    { 
                        id: 6,
                        data: "Can I work on a project I started before the hackathon?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        showAnswer: false                    
                    }
                ],
            }
        }, 
        methods: {
            handleExpandClick (id) {
                let modQuestions = this.questions.map((que) => {
                    if (que.id === id && que.showAnswer === false) que.showAnswer = true;
                    else que.showAnswer = false;
                    return que;
                });

                this.questions = modQuestions;
            }
        }
    }
</script>

<style scoped>
    .expandable-questions {
        height: fit-content;
        max-width: 100%;
        
    }

    .the-question {
        height: 28px;
        width: 390px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;

    }

    .the-read-question {
        height: 28px;
        width: 390px;
        color: yellow;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }

    .main-question {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .question-container {
        border-bottom: solid #D434FE 1px;
        cursor: pointer;
    }

    .expand-btn {
        height: 28px;
        width: 12px;
        color: #D434FE;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        cursor: pointer;
    }

    .expand-btn:hover {
        color: yellow;
    }

    .answer-to-question {
        height: fit-content;
        width: 390px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
    }
</style>