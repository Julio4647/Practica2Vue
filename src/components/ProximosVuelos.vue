<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Proximos Vuelos</p>
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
          text: "Proximos Vuelos",
          href: "#",
          to: "proximos_vuelos"
        },

      ]
    }
  }
}
</script>
   
   
<style></style>