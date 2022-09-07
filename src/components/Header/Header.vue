<template>
  <div>
    <header>
      <div class="container header-content">
        <div class="left" @click="redirectHome">
          <i class="fa-solid fa-gear"></i>
          <p>the local weather</p>
        </div>
        <div class="right">
          <i
            class="fa-solid fa-circle-info" 
            @click="toggleShowInfo"
          ></i>
          <i
            class="fa-solid fa-plus" 
            v-if="route.query.preview"
            @click="addCityToLS() ; getCities()"
          ></i>
        </div>
      </div>
    </header>
    <About :showInfo="showInfo" @closeShowInfo="toggleShowInfo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import './Styles.css';
import addCity from './addCity';
import About from '../About/About.vue';
import getCities from '@/views/Home/getCities';

export default defineComponent({
    name: "Header",
    setup() {
      const router = useRouter();
      const route = useRoute();

      const redirectHome = () => router.push({ name: "home" });
      
      const showInfo = ref<boolean>(false)
      const toggleShowInfo = () => {
        showInfo.value = !showInfo.value 
      }
      
      const { addCityToLS } = addCity()
      getCities()
      return {
        redirectHome,
        showInfo,
        toggleShowInfo,
        route,
        addCityToLS,
        getCities
      };
    },
    components: { About }
});
</script>
