(() => {
	const VueStandardError = {}
		, StandardError = require('standard-error')
	VueStandardError.install = (Vue) => { Vue.prototype.$StandardError = StandardError }
	if (typeof exports === 'object') module.exports = VueStandardError
	else if (typeof define === 'function' && define.amd) {
		define([], () => VueStandardError)
	} else if (window.Vue) {
		window.VueStandardError = VueStandardError
		Vue.use(VueStandardError)
	}
})()
