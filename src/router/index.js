import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'

    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },

        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/reserva_vuelos',
                name: 'reservaVuelos',
                component: () => import('../components/ReservaVuelos.vue')
            },
            {
                path: '/asientos_reservados',
                name: 'asientosReservados',
                component: () => import('../components/AsientosReservados.vue')
            },
            {
                path: '/vuelos_disponibles',
                name: 'vuelosDisponibles',
                component: () => import('../components/VuelosDisponibles.vue')
            },
            {
                path: '/lineas_de_vuelo',
                name: 'lineasDeVuelo',
                component: () => import('../components/LineasDeVuelo.vue')
            },
            {
                path: '/vuelos_cancelados',
                name: 'vuelosCancelados',
                component: () => import('../components/VuelosCancelados.vue')
            },
            {
                path: '/proximos_vuelos',
                name: 'proximosVuelos',
                component: () => import('../components/ProximosVuelos.vue')
            }
    
        ]
    },
]

const router = new VueRouter({ routes })
export default router;