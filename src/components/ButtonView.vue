<template>
<button>Register</button>
</template>

<script>
    export default {
        name: "ButtonView",
    }
</script>

<style scoped>

button {
    /* background-image: linear-gradient(to right,#d434fe, #903aff); */
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
}

button:hover {
    background: linear-gradient(270deg,    #FE34B9 0%, #FF26B9 56.42%, #D434FE 99.99%, #903AFF 100%);
    color: yellow;
}
</style>