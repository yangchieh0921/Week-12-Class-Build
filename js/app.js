new Chart(document.getElementById('barChart'), {
	type: 'bar',
	data: {
		labels: ['Biathlon', 'Bobsleigh', 'Curling', 'Ice Hockey', 'Luge', 'Skating', 'skiing' ],
		datasets: [
			{
				labels: 'Athlete',
				data: ['420', '452', '172', '1536', '180', '1229', '1781'],
				backgroundColor : ['#3e95cd', '#8e5ea2', '#3cba9f','#e8c3b9', '#ff3333', '#66ffff', '#ff9933' ]
			}
		]
	},

			options: {
				legend: {
					display: false
				}

			}

	
});

new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['1924', '1998', '2014'],
		datasets: [
			{
				label: 'Biathlon',
				data: ['12', '36', '60'],
				fill: false,
				borderColor: '#3e95cd'
				
			},
			{
				label: 'Bobsleigh',
				data: [13, 22, 30],
				fill: false,
				borderColor: '#3cba9f'
			},
			{
				label: 'Curling',
				data: [22, 30, 30],
				borderColor: '#c45850',
				fill: false
			},
			{
				label: 'Ice Hockey',
				data: [31, 128, 138],
				borderColor: '#e8c3b9',
				fill: false
			},
			{
				label: 'Luge',
				data: [12, 12, 24],
				borderColor: '#ff3333',
				fill: false
			},
			{
				label: 'Skating',
				data: [28, 84, 140],
				borderColor: '#66ffff',
				fill: false
			},
			{
				label: 'skiing',
				data: [12, 135, 190],
				borderColor: '#ff9933',
				fill: false
			}

		]
	},
	options: {
		title: {
			display: true,
			text: 'Athlete participate in sport amounts'
		}
	}
});

new Chart(document.getElementById('pieChart'), {
	type: 'pie',
	data: {
		label:['man', 'women'],
		datasets: [
			{
				data: [3944, 1826],
				backgroundColor: ['#3e95cd', '#8e5ea2']
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'man and woman participate in sport amounts'
		}
	}
});

new Chart(document.getElementById('advancedChart'), {
	type: 'bar',
	data: {
		labels: ['1928', '1976', '2006'],
		datasets: [
			{
				label: 'Men',
				data: ['83', '159', '299'],
				backgroundColor: '#3e95cd'
			},
			{
				label: 'Women',
				data: ['6', '51', '232'],
				backgroundColor: '#8e5ea2'
			},
			{
				label: 'Medal',
				type: 'line',
				fill: false,
				data: ['89', '210', '531'],
				borderColor: '#e8c3b9',
				backgroundColor: '#e8c3b9'
			}
		]
	}
});

var updatingChart = new Chart(document.getElementById('updatingDataChart'), {
	type: 'horizontalBar',
	data: {
		labels: ['Men', 'Woman'],
		datasets: [{
			label: 'GHOSTS',
			backgroundColor: ['#3e95cd', '#8e5ea2'],
			data: [36, 2]
		}]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Amount of men and woman getting the gold medal in 1924'
		}

	}
});

function updateAllData(chart, data) {
	chart.data.datasets[0].data = data;
	chart.update();
}

setTimeout(function() {
	updateAllData(updatingChart,[113, 93]);
 }, 3000);

function updateConfig(chart, title) {
	chart.options.title.text = title;
	chart.update();
}

setTimeout(function() {
	updateConfig(updatingChart, 'Amount of men and woman getting the gold medal in 2014');
}, 3000);





