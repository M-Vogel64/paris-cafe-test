<template>
    <div class="container mt-4">
        <h2>Editar Cafeteria{{ form.id }}</h2>
        <b-form @submit.prevent="updateCafe">
        <b-form-input v-model="form.nome" class="mb-2" maxlength="255" required />
            <b-form-input v-model="form.data_inauguracao" label="Data de Inauguração" class="mb-2" type="date" :max="new Date().
                toLocaleDateString('sv-SE')" required />
            <b-form-textarea v-model="form.endereco" class="mb-2" maxlength="255" required />
            <b-form-input v-model="form.avaliacao" type="number" min="0" max="10" step="0.01" class="mb-2"
                 required />
            <b-button type="submit" class="btn btn-success me-2">Confirmar</b-button>
            <router-link to="/" class="btn btn-secondary mb-2">Cancelar</router-link>
        </b-form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../services/api';

const route = useRoute();
const router = useRouter();
const form = ref<any>({
    id: '',
    nome: '',
    data_inauguracao: '',
    endereco: '',
    avaliacao: 0,
});

onMounted(async () => {
    const { data } = await api.get(`/cafes/cafeterias/${route.params.id}/`);
    form.value = data;
});

const updateCafe = async () => {
    await api.put(`/cafes/cafeterias/${route.params.id}/`, form.value);
    router.push('/');
};
</script>

<style></style>