var app = (function(){
	var 
		defaultPanel= '#panel-main'
		,appPanel = '#wrapper-app'
		,loaderPanel = '#wrapper-loader'
		,charts = [
			{
				type: 'bar'
				,wrapper: 'chart-0'
				,colors: ['rgba(95, 156, 116 ,0.4)', '#5D6A64']
				,obj: undefined
			},
			{
				type: 'doughnut'
				,wrapper: 'chart-1'
				,colors: ['#8DB4A3','#5B7C7D', '#5F9C74', '#C2D2BD', '#273C41']
				,obj: undefined
			},
			{
				type: 'radar'
				,wrapper: 'chart-2'
				,colors: ['rgba(194, 210, 189, 0.7)', '#5F9C74']
				,obj: undefined
			}
		];

	function trigger(evt, data){
		console.log("Event triggered: "+evt, data);
		switch(evt){
			case 'filters-changed':
				_createCharts();
				break;
			case 'app-shown':
				_animateHeaderNumbers();
				break;
		}
	}
	
	function init(){
		_showDefaultPanel();
		_eventListeners();
		_hideLoader();
		_showApp();
		_createCharts();
	}

	function _eventListeners(){
		$('#sex').on('change', function(){
			trigger('filters-changed');
		});
		$('#modal-confirm').on('click', function(){
			setTimeout(function(){alertify.success("You have successfully assigned a new reward!");}, 500);
		});
	}
	
	function _showDefaultPanel(){
		$(defaultPanel).show();
	}

	function _hideLoader(){
		$(loaderPanel).hide();
	}

	function _animateHeaderNumbers(){
		var delay = 1000;
		$('#num-activity').animateNumber({ number: 92.4}, delay);
		$('#num-rewards').animateNumber({ number: 128}, delay);
		$('#num-shares').animateNumber({ number: 1568}, delay);
		$('#num-users').animateNumber({ number: 2674}, delay);
	}

	function _showApp(){
		$(appPanel).fadeIn('fast', function(){
			trigger('app-shown');
		});
	}

	function _createCharts(){
		_createChart0();
		_createChart1();
		_createChart2();
		_createWordCloud();
	}

	function _createChart0(){
		var index = 0;
		if(charts[index].obj !== undefined){
			charts[index].obj.destroy();
		}
		var chartData = {
		    labels: ['General score', 'Stability', 'Score Range', 'Active Time', 'Smoothness'],
		    datasets: [
		        {
		            label: "Average Group Values",
					backgroundColor: charts[index].colors[0],
					borderColor: charts[index].colors[1],
					borderWidth: 1,
		            data: _shuffle([75, 69, 83, 63, 77])
		        },
		        {
		            label: "Goal Values",
					backgroundColor: charts[index+1].colors[0],
					borderColor: charts[index+1].colors[1],
					borderWidth: 1,
		            data: [88, 90, 80, 90, 80]
		        }
		    ]
    	};
		var ctx = document.getElementById(charts[index].wrapper);
		charts[index].obj = new Chart(ctx,{
			type: charts[index].type,
			data: chartData,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				},
				title: {
					display: true,
					fontSize: 25,
					text: 'Driving Behavior'
				},
				animation: {
					duration: 2000,
					animateScale: true,
					animateRotate: true
				}
			}
		});
	}

	function getRandom(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	function getRandomLevelDistribution(){
		var arrs = [
			[30, 18, 29, 15, 8],
			[39, 19, 24, 12, 6],
			[24, 23, 28, 14, 10],
			[31, 22, 32, 13, 4]
		];
		return arrs[getRandom(0, 3)];
	}

	function _createChart1(){
		var index = 1;
		if(charts[index].obj !== undefined){
			charts[index].obj.destroy();
		}

		var chartData = {
			labels: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'],
			datasets: [{
				data: getRandomLevelDistribution(),
				backgroundColor: charts[index].colors
			},
			{
				data: [24, 21, 31, 15, 9],
				backgroundColor: charts[index].colors
			}]
		};
		var ctx = document.getElementById(charts[index].wrapper);
		charts[index].obj = new Chart(ctx,{
			type: charts[index].type,
			data: chartData,
			options: {
				title: {
					display: true,
					fontSize: 25,
					text: 'Level Distribution'
				},
				animation: {
					duration: 1500,
					animateScale: true,
					animateRotate: true
				}
			}
		});
	}

	function getRandomRadarValues(){
		var arrs = [
			[5, 1, 7, 7, 3],
			[17, 7, 9, 9, 0],
			[13, 2, 8, 7, 1],
			[3, 1, 6, 8, 7],
			[10, 2, 7, 5, 2]
		];
		return arrs[getRandom(0, 3)];
	}

	function _createChart2(){
		var index = 2;
		if(charts[index].obj !== undefined){
			charts[index].obj.destroy();
		}
		var chartData = {
			labels: ['Weekly Connections', 'Active Contracts', 'General Score(1/10)', 'Stability(1/10)', 'Triggered Words'],
			datasets: [
				{
					label: 'Average User',
					backgroundColor: charts[index].colors[0],
					data: getRandomRadarValues()
				},
				{
					label: 'Target Values',
					backgroundColor: charts[index].colors[1],
					data: [14, 3, 9, 10, 0]
				}
			]
		};
		var ctx = document.getElementById(charts[index].wrapper);
		charts[index].obj = new Chart(ctx,{
			type: charts[index].type,
			data: chartData,
			options: {
				title: {
					display: true,
					fontSize: 25,
					text: 'Data-model Comparison'
				},
				animation: {
					duration: 1500,
					animateScale: true,
					animateRotate: true
				}
			}
		});
	}

	function _shuffle(array) {
	    let counter = array.length;

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        let index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        let temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	}

	function _createWordCloud(){
			var tags = [['movies', 65], ['phone', 77], ['cars', 75], ['music', 65], ['food', 68], ['driver', 39], ['road', 67], ['trip', 58], ['speed', 33], ['travel', 28], ['distance', 55], ['bike', 44], ['cocktail', 67], ['bar', 77], ['nervous', 55], ['anxious', 22], ['fuck', 11], ['acceleration', 37], ['family', 25], ['weekend', 46], ['fast', 33], ['slow', 13], ['riding', 7], ['reckless', 4], ['police', 8], ['damage', 11], ['malfunction', 16], ['engine', 28], ['traffic', 33], ['beer', 44], ['wheelie', 12], ['crash', 8], ['hurry', 7], ['running', 18]];
		WordCloud(document.getElementById('chart-3'), { list: tags, color: _getRandomColor } );
	}
	function _getRandomColor(){
		var c = ['#5F9C74', '#8DB4A3', '#5D6A64', '#273C41', '#5B7C7D', '#025939', '#60A68C', '#025930'];
		return c[getRandom(0, c.length)];
	}
	return {
		trigger: trigger,
		init: init
	};
})();