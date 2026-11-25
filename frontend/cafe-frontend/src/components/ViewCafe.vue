<template>
    <div class="container mt-4">
        <h2 class="mb-3">Cafeteria {{ cafe?.id }}</h2>
            <p><strong>Nome:</strong> {{ cafe?.nome }}</p>
            <p><strong>Data de Inauguração:</strong> {{ cafe?.data_inauguracao?.split('-').reverse().join('/') }}</p>
            <p><strong>Endereço:</strong> {{ cafe?.endereco }}</p>
            <p><strong>Avaliação:</strong> {{ cafe?.avaliacao }}/10</p>
             <router-link to="/" class="btn btn-secondary mb-2">Voltar</router-link>
        </div>
       

</template>


<script setup lang="ts">    
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '../services/api';

const route = useRoute();
const cafe = ref<any>(null);

const fetchCafe = async () => {
    const { data } = await api.get(`cafeterias/${route.params.id}/`);
    cafe.value = data;
}; 

onMounted(fetchCafe);

</script>

<style></style>