export default defineEventHandler( async (event) => {
	return await $fetch('https://api.upup.cool/get/CSGO-Toolbox/version')
})
