<template>
	<div>
		<b-row>
			<h4>Table Title
				<small>
					<b-icon-share-fill class="bg-primary text-white"/>
				</small>
			</h4>
			<b-col sm="12" class="mb-2">
				<div>
					<b-card class="table-notification">
						<img src="../assets/vector.png" class="table-notification-image"/>
						<span class="text-success m-lg-2"><strong>+236</strong> <span class="notification"> clicks from new keywords containing the phrase</span> <strong>'compare'</strong></span>
					</b-card>
				</div>
			</b-col>
			<b-col sm="12">
				<b-table sort-by="date"
				         :fields="fields"
				         striped hover
				         :items="tableItems"
				         :column="fields"></b-table>
			</b-col>
		</b-row>
	</div>
</template>

<script>

    import axios from "axios";

    export default {
        data() {
            return {
                tableItems: [],
                symbol: null,
                fields: [],
            }
        }, mounted() {
            this.fields = [{id: {'label': 'Date', key: 'date'}}, {
                id: {
                    'label': 'symbol',
                    key: 'symbol'
                }
            }, {id: {'label': 'Open', key: 'open'}}, {id: {'label': 'High', key: 'high'}}, {
                id: {
                    'label': 'Low',
                    key: 'low'
                }
            }, {id: {'label': 'Close', key: 'close', sortable: true}}]
            this.getTableData()
        },
        methods: {
            async getTableData() {
                let self = this
                await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
                    .then(function (response) {
                        const data = response.data
                        if (data['Meta Data']) {
                            self.symbol = data['Meta Data']['2. Symbol']
                        }

                        const pushTableItems = [];


                        if (data['Time Series (Daily)']) {
                            _.map(data['Time Series (Daily)'], (i, index) => {
                                pushTableItems.push({
                                    date: index,
                                    symbol: self.symbol,
                                    open: i['1. open'],
                                    high: i['2. high'],
                                    low: i['3. low'],
                                    close: i['4. close'],
                                })
                            })
                        }
                        self.tableItems = _.filter(pushTableItems, (o, index) => index < 5);
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

	.notification {
		color: #02B371;
	}

	.sr-only {
		display: none;
	}
</style>