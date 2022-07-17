<template>
    <div class="main">
        <h2 class="title">Extension Demo3</h2>
        <h3 class="req_title">fetch_fake: {{resp}}</h3>
        <el-button @click="req" type="success">request</el-button>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
    setup() {
        let resp = ref("null")

        const req = () => {
            const port = chrome.runtime.connect({name:'ping'})
            port.onMessage.addListener((context) => {
                console.log(context)
                resp.value = `${context.msg}${context.index}`
            })
           port.postMessage("ping")
        }

        return {
            resp,
            req
        }
    }
})
</script>

<style lang="scss">
.main {
    height: 100%;
    width: 100%;
    .title {
        padding-bottom: 30px;
    }
    .req_title {
        padding-bottom: 5px;
    }
}
</style>