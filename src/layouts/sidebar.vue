<template>
	<div>
		<div id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-headerstyle="display: block">
			<div>
				<div class="w-100">
					<b-card-group id="sidebar-menus">
						<b-card title="SEO Testing" @click.prevent>
							<strong id="down-icon" v-if="isVisible">
								<b-icon class="icon-up" icon="chevron-compact-up" variant="blue"></b-icon>
							</strong>
							<strong id="up-icon" v-else>
								<b-icon icon="chevron-compact-down" variant="blue"></b-icon>
							</strong>
						</b-card>
						<b-card title="Site Testing" @click.prevent>
							<strong id="down-icon" v-if="isVisible">
								<b-icon class="icon-up" icon="chevron-compact-up" variant="blue"></b-icon>
							</strong>
							<strong id="up-icon" v-else>
								<b-icon icon="chevron-compact-down" variant="blue"></b-icon>
							</strong>
						</b-card>
						<b-card title="Keyword Research" v-b-toggle.site-testing @click.prevent>
							<strong id="down-icon" v-if="isVisible">
								<b-icon class="icon-up" icon="chevron-compact-up" variant="blue"></b-icon>
							</strong>
							<strong id="up-icon" v-else>
								<b-icon icon="chevron-compact-down" variant="blue"></b-icon>
							</strong>
						</b-card>
						<b-collapse id="site-testing" v-model="isVisible">
							<div id="sidebar-sub-menu" class="px-lg-5 pt-4 pb-4">
								<p @click="active = 'site-audit'"
								   :class="{active:active === 'site-audit'}">
									<span v-if="active == 'site-audit'" class="active-icon mr-2"></span>
									Site Audit</p>
								<p @click="active = 'dashboard'"
								   :class="{active:active === 'dashboard'}">
									<span v-if="active == 'dashboard'" class="active-icon mr-2"></span>
									All Sites Dashboard</p>
								<p @click="active = 'pages-performance'"
								   :class="{active:active === 'pages-performance'}">
									<span v-if="active == 'pages-performance'" class="active-icon mr-2"></span>
									Pages
									Performace
								</p>
								<p @click="active = 'low-ctr-pages'"
								   :class="{active:active === 'low-ctr-pages'}">
									<span v-if="active == 'low-ctr-pages'" class="active-icon mr-2"></span>
									Low CTR pages
								</p>
								<p @click="active = 'missing-keywords'"
								   :class="{active:active === 'missing-keywords'}">
									<span v-if="active == 'missing-keywords'" class="active-icon mr-2"></span>
									missing keyword</p>
								<p @click="active = 'top-pages'"
								   :class="{active:active === 'top-pages'}">
									<span v-if="active == 'top-pages'" class="active-icon mr-2"></span>
									Top pages</p>
								<p @click="active = 'track-keywords'"
								   :class="{active:active === 'track-keywords'}">
									<span v-if="active == 'track-keywords'" class="active-icon mr-2"></span>
									Track Keywords.</p>
							</div>
						</b-collapse>
					</b-card-group>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: true,
                active: 'pages-performance',
            }
        },
    }
</script>

<style scoped>
	.b-sidebar > .b-sidebar-body {
		background-color: #2C2C4A !important;
	}

	#sidebar-menus {
		display: block;
	}

	#sidebar-menus .card {
		background: #E2EDFC;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 0;
	}

	#sidebar-menus .card-title {
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 150%;
		display: flex;
		align-items: center;
		letter-spacing: 0.005em;
		font-feature-settings: 'tnum' on, 'lnum' on;
		color: #007EFF;
	}

	#up-icon, #down-icon {
		position: absolute;
		right: 35px;
		top: 20px;
	}

	#site-testing {
		background: #EDF1F5;
	}

	#site-testing p {
		cursor: pointer;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 150%;
		display: flex;
		align-items: center;
		letter-spacing: 0.005em;
		font-feature-settings: 'tnum' on, 'lnum' on;
		color: #727374;
	}

	#site-testing p.active {
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 150%;
		display: flex;
		align-items: center;
		letter-spacing: 0.005em;
		font-feature-settings: 'tnum' on, 'lnum' on;
		color: #007EFF;
	}

	#site-testing p .active-icon {
		position: relative;
		width: 4px;
		height: 20px;
		background: #0F56B3;
		left: -22px;
	}
</style>
