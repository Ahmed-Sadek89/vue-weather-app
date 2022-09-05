<template>
    <div class="container">
        <AsyncCityView />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsyncCityView from '@/components/AsyncCityView/AsyncCityView.vue';

export default defineComponent({
    setup() {
       
    },
    components: { AsyncCityView }
})
</script>

<style scoped>

</style>