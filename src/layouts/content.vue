<template>
	<div>
		<b-container>
			<b-row>
				<h4 class="content-header-title m-0">
					Pages Performace
				</h4>
				<p>
					<b-icon-play-circle-fill variant="info"></b-icon-play-circle-fill>
					<small class="content-header-sub-title text-info">
						Learn more
					</small>
				</p>
			</b-row>
			<header-box class="mb-5"/>
			<dashboard-table class="mb-5"/>
			<graph/>
		</b-container>
	</div>
</template>

<script>
    import headerBox from "../views/headerBox";
    import DashboardTable from "../views/table";
    import Graph from "../views/graph"

    export default {
        components: {headerBox, DashboardTable, Graph},
        data() {
            return {}
        }
    }
</script>