import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			"title": 'CSGO工具箱',
			"meta": [{ name: 'description', content: '一个为CSGO游戏的各个方面带来便利的工具集合' }],
			"link": [],
			"style": [],
			"script": [],
			"noscript": [],
			"charset": "utf-8",
			"viewport": "width=device-width, initial-scale=1"
		}
	},
	
	modules: [],
	
	ssr: false,
	
	css:[
		"~/assets/css/tailwind.css"
	],
	
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	}
})
