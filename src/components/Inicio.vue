<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <p>Inicio</p>
        <b-row>
            <b-col>
                <b-button :to="{ name: 'reservaVuelos' }" variant="success">Reservas de Vuelos</b-button>

            </b-col>
            <b-col>
                <b-button :to="{ name: 'vuelosDisponibles' }" variant="success">Vuelos Disponibles</b-button>

            </b-col>
            <b-col>
                <b-button :to="{ name: 'vuelosCancelados' }" variant="success">Vuelos Cancelados</b-button>

            </b-col>
        </b-row>

        <!-- <b-link :to="{name:'inicio'}">Siguiente</b-link> -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [],
        };
    },
};
</script>
  
<style></style>