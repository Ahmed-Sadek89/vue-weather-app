<template>
    <div class="tracker" v-if="route.query.preview">
        <div class="container">
            <p>
                You are currently previewing this city, click the "+"
                icon to start tracking this city.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import './Styles.css';

export default defineComponent({
    name: "Tracker",
    setup () {
        const route = useRoute();
       

        return { route }
    }
})
</script>