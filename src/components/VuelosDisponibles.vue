<template>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <p>Vuelos Disponibles</p>
      <b-link :to="{ name:  'lineasDeVuelo'}">siguiente</b-link>
  
      <!-- <b-link :to="{name:'inicio'}">Siguiente</b-link> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
        {
            text: "Inicio",
            href: "#",
            to: "inicio"
          },
          {
            text: "Vuelos Disponibles",
            href: "#",
            to: "vuelos_disponibles"
          },
          {
            text: "",
            href: "#",
            to: "lineas_de_vuelo"
          },

         ],
      };
    },
  };
  </script>
  
  <style>
  </style>