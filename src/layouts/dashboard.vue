<template>
	<div>
		<b-navbar toggleable="lg" class="top-bar p-0">
			<b-card class="logo w-25">
				<img src="../assets/logo.png"/>
			</b-card>
			<b-dropdown text="somewebsite.com" left class="m-2">
				<b-dropdown-item href="#">EN</b-dropdown-item>
				<b-dropdown-item href="#">ES</b-dropdown-item>
				<b-dropdown-item href="#">RU</b-dropdown-item>
				<b-dropdown-item href="#">FA</b-dropdown-item>
			</b-dropdown>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-navbar>
				<b-collapse id="nav-collapse" is-nav>
					<!-- Right aligned nav items -->
					<b-navbar-nav>
						<div class="w-100 mt-4">
							<b-progress height="2px" :value="value"></b-progress>
							<small class="text-black-50">120 / 240 requests consumed</small>
						</div>

						<div class="mt-3">
							<a href="">
								<span class="badge rounded-pill badge-notification bg-danger">9</span>
								<b-icon icon="envelope-fill" variant="info" class="envelope mt-2" size="lg"/>
							</a>
						</div>
						<b-nav-item-dropdown>
							<!-- Using 'button-content' slot -->
							<template slot="button-content">John Doe <br/>
								<small>
									<b-icon-gear></b-icon-gear>
									Settings</small>
							</template>
							<b-dropdown-item href="#">Profile</b-dropdown-item>
							<b-dropdown-item href="#">Sign Out</b-dropdown-item>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</b-navbar>
		<sidebar class="sidebar"/>
		<div class="p-3 body-content">
			<body-content/>
		</div>
	</div>
</template>

<script>
    import Sidebar from "./sidebar";
    import BodyContent from "./content"

    export default {
        components: {
            Sidebar,
            BodyContent,
        },
        data() {
            return {
                value: 75,
                max: 100
            }
        }
    }
</script>

<style>
	.top-bar {
		border-bottom: 1px solid #00000012;
	}

	.top-bar .navbar.navbar-light.navbar-expand {
		position: absolute;
		right: 100px;
	}

	.sidebar {
		width: 25%;
		display: inline-block;
	}

	.logo {
		background-color: #2C2C4A !important;
	}

	.envelope {
		font-size: 25px;
		background: #FFFFFF;
		box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.12);
		border-radius: 4px;
		margin-right: 40px;
	}

	.progress {
		width: 170px;
		height: 10px;
		margin-right: 40px;
	}

	small {
		font-size: 11px !important;
	}

	.badge {
		position: absolute;
		top: 16px;
		right: 7rem;
		background: linear-gradient(180deg, #FF7878 0%, #FF4F4F 100%);
	}

	.body-content {
		width: 75%;
		display: inline-block;
		position: absolute;
	}
</style>