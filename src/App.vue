<template>
	<div id="app">
		<dashboard/>
	</div>
</template>

<script>
    import dashboard from "./layouts/dashboard";

    export default {
        name: "App",
        components: {
            dashboard,
        },
    };
</script>
