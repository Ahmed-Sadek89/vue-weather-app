<template>
  <header>
    <div class="container header-content">
      <div class="left" @click="redirectHome">
        <i class="fa-solid fa-gear"></i>
        <p>the local weather</p>
      </div>
      <div class="right">
        <i class="fa-solid fa-circle-info"></i>
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import './Styles.css';

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter();
    const redirectHome = () => router.push({name: 'home'});

    return {
      redirectHome
    }
  }
});
</script>
