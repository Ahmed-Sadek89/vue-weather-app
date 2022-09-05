<template>
    <div class="mapBox">
        <input
            type="text" 
            placeholder="Search for a city or state"
            autocomplete="off"
            v-model="placesInput"
            @input="handleQuery"
        />
        <ul v-show="placesResultData.length">
            <li
                v-for="index in placesResultData" 
                :key="index.id"
                @click="handlePushingtoCity(index)"
            >
                {{index.place_name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import './Styles.css'
import { defineComponent, PropType, ref } from 'vue'
import placesType from "@/Types/places";

export default defineComponent({
    name: "MapBox",
    emits: ['placesResultfn', 'pushToCityFn'],
    props: {
        placesResultData: {
            required: true,
            default: [],
            type: Array as PropType<placesType[]>
        }
    },
    setup ( props, { emit } ) {
        const placesInput = ref<string>('')
        const handleQuery = () => emit('placesResultfn', placesInput.value)
        
        const handlePushingtoCity = (payload: placesType) => emit('pushToCityFn', payload)
        return {
            placesInput,
            handleQuery,
            handlePushingtoCity
        }
    }
})
</script>
