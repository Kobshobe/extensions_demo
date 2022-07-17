<template>
    <div class="main">
        <Req></Req>
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
.main {
    padding:10px;
    height:200px;
    width: 320px;
}
</style>