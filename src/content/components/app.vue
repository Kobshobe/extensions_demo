<template>
    <div class="content-box">
        <Req/>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import Req from '../../components/Req.vue'

export default defineComponent({
    components: {
        Req
    }
})
</script>

<style lang="scss">
.content-box {
    padding:10px;
    height:200px;
    width: 320px;
    border: 2px solid #555;
    border-radius: 5px;
}
</style>