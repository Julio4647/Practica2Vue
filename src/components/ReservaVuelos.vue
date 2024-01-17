<template>
    <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <p>Reservas de Vuelos </p>
    <b-link :to="{ name:  'asientosReservados'}">siguiente</b-link>
    
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
            text: "Reservas de Vuelo",
            href: "#",
            to: "reserva_vuelos"
          },
          {
            text: "",
            href: "#",
            to: "asientos_reservados"
          },
                
            ]
        }
    }
}
</script>
   
   
<style></style>