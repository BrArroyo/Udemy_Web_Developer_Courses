<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <h1>Hola</h1>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card color="blue">
          <v-card-text class="text-button text-center">650</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="blue">
          <v-card-text class="text-button text-center">650</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import axios from "axios";
const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/pikachu`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
</script>
