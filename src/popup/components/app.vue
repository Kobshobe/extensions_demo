<template>
    <div style="padding:20px;height:200px;width: 320px;">
        <h2>Extension Demo</h2>
        <h3>fetch_fake: {{resp}}</h3>
        <button @click="req">req</button>
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