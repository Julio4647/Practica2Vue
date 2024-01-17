<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Vuelos Cancelados</p>
    <b-link :to="{ name: 'proximosVuelos' }">siguiente</b-link>
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
          text: "Vuelos Cancelados",
          href: "#",
          to: "vuelos_cancelados"
        },
        {
          text: "",
          href: "#",
          to: "proximos_vuelos"
        },
      ]
    }
  }
}
</script>
   
   
<style></style>