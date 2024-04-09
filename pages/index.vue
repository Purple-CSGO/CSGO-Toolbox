<template>
	<div class="bg" v-cloak >
		<div class="fade-up-1" >
			<img src="/img/logo.png" class="logo" alt="" >
		</div>
		<div class="relative fade-up-2" >
			<p class="title" >CSGO工具箱</p>
			<span class="badge" >Beta</span>
		</div>
		<p class="slogan fade-up-3" >一个为CSGO游戏的各个方面带来便利的工具集合</p>
		
		<div class="btn-group fade-up-4" >
			<a href="https://api.upup.cool/get/csgo-toolbox" target="_blank" ><button class="btn-download">
				下载
			</button></a>
			<a href="https://github.com/One-Studio/CSGO-Toolbox" target="_blank" ><button class="btn-repo">
				<img src="/img/github-fill.svg" class="w-5" alt="github" >
				项目
			</button></a>
		</div>
		
		<p class="text-xs tracking-wider opacity-70 fade-up-5" >当前版本：{{ version }}</p>
	</div>
</template>

<script setup>
// 版本号
const { data: version } = await useFetch('/api/version')

// 动画
const { $ScrollReveal } = useNuxtApp();

// 挂载
onMounted(async () => {
	await nextTick()
	await $ScrollReveal().reveal('.fade-up-1', {delay: 200, duration: 1500, distance: '60px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-2', {delay: 350, duration: 1200, distance: '60px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-3', {delay: 550, duration: 1200, distance: '70px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-4', {delay: 700, duration: 1200, distance: '80px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-5', {delay: 850, duration: 1200, distance: '90px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	// await $ScrollReveal().reveal('.fade-up-short', {duration: 1000, distance: '20px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always', delay: 200})
})

</script>

<style>
* {
	font-family: -apple-system, "PingFang SC", "Microsoft YaHei", system-ui, Arial, serif;
}

body {
	background: linear-gradient(270deg, rgba(233,181,181,0.62), #F2EAF1);
}

[v-cloak]{
	display: none !important;
}
</style>

<style scoped>
.bg {
	@apply w-[100vw] h-[100vh] p-4 flex flex-col content-center items-center justify-center text-center;
}

.logo {
	@apply w-36 shadow-lg hover:shadow-xl duration-300 m-8;
	border-radius: 32px;
}


.title {
	@apply font-bold opacity-80 transition-all;
	font-size: 56px;
	line-height: 64px;
}

@media (max-width: 640px) {
	.title {
		font-size: 48px;
		line-height: 56px;
	}
}

.badge {
	@apply rounded-full bg-white bg-opacity-80 text-[#555] font-normal absolute px-2 py-0.5 -top-1 -right-11;
	font-size: 10px;
	line-height: 18px;
}

.slogan {
	@apply opacity-60 m-3 tracking-widest;
	font-size: 18px;
	line-height: 26px;
}

.btn-group {
	@apply flex gap-3 mt-6 mb-4;
}

.btn-download {
	@apply p-3 w-32 rounded-full text-sm shadow-sm hover:shadow-md hover:bg-[#E87B5C] active:scale-95 transition duration-300 bg-[#FF9071] text-white font-semibold tracking-wider;
}

.btn-repo {
	@apply py-3 px-6 rounded-full text-sm shadow-sm hover:shadow-md active:scale-95 transition duration-300 bg-white bg-opacity-70 flex justify-center items-center gap-1;
}
</style>

