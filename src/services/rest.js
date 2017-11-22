import Vue from 'vue'

export default Vue.extend({
	name: 'RestController',

	data () {
		return {
			url: null
		}
	},

	methods: {
    get (path) {
      console.log(path)
    }
	}
})
