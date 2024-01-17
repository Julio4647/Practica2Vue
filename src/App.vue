<script setup>
</script>

<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="3">
          <b-sidebar z-index="1"  shadow visible no-close-on-route-change no-header-close>
            <div class="px-3 py-2">
              <b-nav vertical class="pt-5">
                <b-nav-item>
                  <b-link :to="{ name:  'inicio'}">
                    Inicio
                  </b-link>
                </b-nav-item>

                <b-nav-item >
                  <b-link :to="{ name: 'reservaVuelos'}">
                    Reserva de Vuelos
                  </b-link>
                </b-nav-item>

                <b-nav-item >
                  <b-link :to="{ name: 'vuelosDisponibles'}">
                    Vuelos Disponibles
                  </b-link>
                </b-nav-item> 
                
                <b-nav-item >
                  <b-link :to="{ name: 'vuelosCancelados'}">
                    Vuelos Cancelados
                  </b-link>
                </b-nav-item> 
              </b-nav>
              
            </div>
          </b-sidebar>
      </b-col>
      <b-col>
        <router-view> </router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
</style>
