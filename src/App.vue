<template>
  <div class="relative">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header/Header.vue';

export default defineComponent({
    setup() {
    },
    components: { Header }
})
</script>