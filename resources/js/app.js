require('./bootstrap')

import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

import exemple from './components/ExampleComponent'

Vue.use(Vuesax, {})

const app = new Vue({
    components: {
		'example-component': exemple,
	}
}).$mount('#app')
