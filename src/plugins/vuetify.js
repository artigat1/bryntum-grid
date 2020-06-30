/**
 *- Vuetify plugin
 */
import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
        primary: '#1D73AD',
        secondary: '#8A8A8A',
        accent: '#F0A549',
        error: '#F44336',
        info: '#333333',
        success: '#008456',
        warning: '#F0A549',
    },
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
})

// eof
