<template>
	<div class="bg">
		<div class="fade-up-1" >
			<img src="/img/logo.png" class="logo" alt="" >
		</div>
		<div class="fade-up-2 relative" >
			<p class="title" >CSGO工具箱</p>
			<span class="badge" >Beta</span>
		</div>
		<p class="slogan fade-up-3" >一个给CSGO游戏的各个方面带来便利的工具集合</p>
		
		<div class="btn-group fade-up-4" >
			<button class="btn-download"  >
				<a href="https://api.upup.cool/repo/One-Studio/CSGO-Toolbox/&amd64&&&.exe" target="_blank">下载</a>
			</button>
			<button class="btn-repo" >
				<img src="/img/github-fill.svg" class="w-5" alt="" >
				<a href="https://github.com/One-Studio/CSGO-Toolbox" target="_blank" class="font-bold text-[#555]" >项目</a>
			</button>
		</div>
		
		<p class="text-xs opacity-70 tracking-wider fade-up-5" >当前版本：0.0.9-alpha.11</p>
	</div>
</template>

<script setup >
// "https://api.upup.cool/repo/One-Studio/CSGO-Toolbox/version"
// const version = "0.0.9-alpha.11"
// const download_url = "https://api.upup.cool/repo/One-Studio/CSGO-Toolbox/&amd64&&&.exe"

const { $ScrollReveal } = useNuxtApp();

onMounted(async () => {
	await nextTick()
	await $ScrollReveal().reveal('.fade-up-1', {delay: 400, duration: 1500, distance: '50px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-2', {delay: 550, duration: 1200, distance: '50px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-3', {delay: 750, duration: 1200, distance: '50px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-4', {delay: 900, duration: 1200, distance: '50px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	await $ScrollReveal().reveal('.fade-up-5', {delay: 1000, duration: 1200, distance: '50px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always'})
	// await $ScrollReveal().reveal('.fade-up-short', {duration: 1000, distance: '20px', animated: 'tada', reset: true, easing: 'cubic-bezier(.17,.62,.09,.97)', useDelay: 'always', delay: 200})
})

</script>

<style>
* {
	font-family: -apple-system, "PingFang SC", "Microsoft YaHei", system-ui, Arial, serif;
}


[v-cloak]{
	display: none !important;
	transition: none;
}
</style>

<style scoped>
.bg {
	@apply w-[100vw] h-[100vh] p-4 flex flex-col content-center items-center justify-center text-center;
	background: linear-gradient(270deg, rgba(233,181,181,0.62), #F2EAF1);
}

.logo {
	@apply w-36 shadow-lg hover:shadow-xl duration-300 m-8;
	border-radius: 32px;
}

.title {
	@apply font-bold opacity-80;
	font-size: 56px;
	line-height: 64px;
}

.badge {
	@apply rounded-full bg-white bg-opacity-80 text-[#555] font-normal absolute px-2 py-0.5 -top-1 -right-12;
	font-size: 10px;
	line-height: 18px;
}

.slogan {
	@apply opacity-60 m-3 tracking-widest;
	font-size: 18px;
	line-height: 26px;
}

.btn-group {
	@apply flex gap-2 mt-6 mb-4;
}

.btn-download {
	@apply p-3 w-32 rounded-full text-sm shadow-sm hover:shadow-md hover:bg-[#E87B5C] active:scale-95 transition duration-300 bg-[#FF9071] text-white font-semibold tracking-wider;
}

.btn-repo {
	@apply py-3 px-6 rounded-full text-sm shadow-sm hover:shadow-md active:scale-95 transition duration-300 bg-white bg-opacity-70 flex justify-center items-center gap-1;
}
</style>

