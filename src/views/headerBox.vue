<template>
	<div>
		<b-row>
			<b-col sm="4">
				<b-card title="2158">
					<b-card-text>
						<small class="text-black-50">Clicks <span class="text-success clicks">(+ 64.2%)</span> </small>
					</b-card-text>
				</b-card>
			</b-col>
			<b-col sm="4">
				<b-card title="1.8 M">
					<b-card-text>
						<small class="text-black-50">Impressions <span
								class="text-success clicks">(+ 78%)</span></small>
					</b-card-text>
				</b-card>
			</b-col>
			<b-col sm="4">
				<b-card title=".12%">
					<b-card-text>
						<small class="text-black-50">AVERAGE CTR <span
								class="text-success clicks">(+ 82%)</span></small>
					</b-card-text>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
	.text-success.clicks {
		color: #02B371 !important;
	}
</style>