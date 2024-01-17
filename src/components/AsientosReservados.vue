<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <p>Asientos Reservados</p>
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
                    text: "Reservas de vuelos",
                    href: "#",
                    to: 'reserva_vuelos'
                },
                {
                    text: "Asientos Rersevados",
                    href: "#",
                    to: "asientos_reservados"
                }
            ]
        }
    }
}
</script>
   
   
<style></style>