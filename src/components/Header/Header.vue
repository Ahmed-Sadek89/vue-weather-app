<template>
  <div>
    <header>
      <div class="container header-content">
        <div class="left" @click="redirectHome">
          <i class="fa-solid fa-gear"></i>
          <p>the local weather</p>
        </div>
        <div class="right">
          <i class="fa-solid fa-circle-info" @click="toggleShowInfo"></i>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
    </header>
    <About :showInfo="showInfo" @closeShowInfo="toggleShowInfo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import './Styles.css';
import About from '../About/About.vue';

export default defineComponent({
    name: "Header",
    setup() {
        const router = useRouter();
        const redirectHome = () => router.push({ name: "home" });

        const showInfo = ref<boolean>(false)
        const toggleShowInfo = () => {
          showInfo.value = !showInfo.value 
        }
        return {
            redirectHome,
            showInfo,
            toggleShowInfo
        };
    },
    components: { About }
});
</script>
