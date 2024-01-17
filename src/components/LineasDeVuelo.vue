<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Lineas de Vuelo</p>
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
          text: "Lineas de Vuelo",
          href: "#",
          to: "lienas_de_vuelo"
        },
      ]
    }
  }
}
</script>
   
   
<style></style>