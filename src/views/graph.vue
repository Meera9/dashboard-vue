<template>
	<div>
		<b-row>
			<h4>Graph: Table Title
				<small>
					<b-icon-share-fill class="bg-primary text-white"/>
				</small>
			</h4>
			<b-card class="p-0">
				<b-row class="p-3">
					<b-col m="4">
						<b-row>
							<b-col sm="3" id="input-small">
								<label for="input-small">Symbol:</label>
							</b-col>
							<b-col sm="9" id="input-form-fields">
								<b-form-select class="w-100" :options="[{value:'IBMS',text:'IBMS'}]" value="IBMS"
								               id="input-small dropdown" size="sm"
								               placeholder="Enter your name">

								</b-form-select>
							</b-col>
						</b-row>
					</b-col>
					<b-col m="4">
						<b-row>
							<b-col sm="3" id="input-small">
								<label for="input-small">Start Date:</label>
							</b-col>
							<b-col sm="9" id="input-form-fields">
								<b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
							</b-col>
						</b-row>
					</b-col>
					<b-col m="4">
						<b-row>
							<b-col sm="3" id="input-small">
								<label for="input-small">End Date:</label>
							</b-col>
							<b-col sm="9" id="input-form-fields">
								<b-form-input id="input-small" size="sm" placeholder="Enter your name"></b-form-input>
							</b-col>
						</b-row>
					</b-col>
				</b-row>
				<b-row>
					<b-col m="4" class="mt-2">
						<b-button variant="success">Search</b-button>
					</b-col>
				</b-row>
				<b-row>
					<b-col m="12" class="mt-2">
						<div class="form-group">
							<div id="chart">
								<apexchart type="candlestick" height="350" :options="chartOptions"
								           :series="series"></apexchart>
							</div>
						</div>
					</b-col>
				</b-row>
			</b-card>
		</b-row>
	</div>
</template>

<script>
    import axios from "axios";
    import moment from "moment"

    export default {
        data() {
            return {
                series: [],
                chartOptions: {
                    chart: {
                        type: 'candlestick',
                        height: 350
                    },
                    title: {
                        text: 'CandleStick Chart',
                        align: 'left'
                    },
                    xaxis: {
                        type: 'datetime'
                    },
                    yaxis: {
                        tooltip: {
                            enabled: true
                        }
                    }
                },
                chartData: [],
                tooltip: `<b>{date:MMM dd}</b><br/>
                    <table>
                    <tr><td>high</td><td>{high:c}</td><tr/>
                    <tr><td>low</td><td>{low:c}</td><tr/>
                    <tr><td>open</td><td>{open:c}</td><tr/>
                    <tr><td>close</td><td>{close:c}</td><tr/>
                    <tr><td>volume</td><td>{volume:c}</td><tr/>
                    </table>`,
                options: {
                    'fill': '#88bde9',
                }
            }
        },
        mounted() {
            this.getChartData()
        },
        methods: {
            async getChartData() {
                let self = this
                await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
                    .then(function (response) {
                        const data = response.data
                        if (data['Meta Data']) {
                            self.symbol = data['Meta Data']['2. Symbol']
                        }

                        const pushGraphItems = [];

                        if (data['Time Series (Daily)']) {
                            _.map(data['Time Series (Daily)'], (i, index) => {
                                pushGraphItems.push(
                                    {
                                        x: moment(index),
                                        y: [parseFloat(i['1. open']), parseFloat(i['2. high']), parseFloat(i['3. low']), parseFloat(i['4. close'])]
                                    },
                                )
                            })
                        }

                        self.series = [{
                            data: _.filter(pushGraphItems, (i, index) => index < 5)
                        }]
                    })
            },
        }
    }
</script>

<style>
	.table-notification {
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 24px;
		color: #02B371;
	}

	.table-notification .card-body {
		padding: 0;
	}

	.col-sm-3#input-small {
		background: #cccccc;
		padding: 3px;
		border-radius: 2px;
		font-size: 12px;
		line-height: 25px;
	}

	select {
		height: 32px !important;
		background: #ffffff;
		border: 1px solid #ced4da;
	}

	#input-form-fields {
		padding-left: 0;
	}
</style>