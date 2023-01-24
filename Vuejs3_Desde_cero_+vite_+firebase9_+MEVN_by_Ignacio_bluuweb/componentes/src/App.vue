<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";

const miFavorito = ref("");
const posts = ref([]);
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => (posts.value = data));

const fijarFavorito = (title) => {
    miFavorito.value = title;
};

const next = () => {
    inicio.value = inicio.value + postXpage;
    fin.value = fin.value + postXpage;
};

const prev = () => {
    inicio.value = inicio.value - postXpage;
    fin.value = fin.value - postXpage;
};

const maxLength = computed(() => posts.value.length);
</script>

<template>
    <div class="container">
        <h1>{{ miFavorito || "Sin favorito" }}</h1>

        <PaginatePost
            @next="next"
            @prev="prev"
            :inicio="inicio"
            :fin="fin"
            :maxLength="maxLength"
            class="mb-2"
        ></PaginatePost>

        <BlogPost
            v-for="post in posts.slice(inicio, fin)"
            :key="post.title"
            :title="post.title"
            :id="post.id"
            :body="post.body"
            class="mb-2"
            @fijarFavorito="fijarFavorito"
        >
        </BlogPost>
    </div>
</template>