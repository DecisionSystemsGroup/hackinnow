var app = (function(){
	var 
		defaultPanel= '#panel-main'
		,appPanel = '#wrapper-app'
		,loaderPanel = '#wrapper-loader'
		,charts = [
			{
				type: 'line'
				,wrapper: 'chart-0'
				,colors: ['rgba(95, 156, 116 ,0.4)', '#5D6A64']
				,obj: undefined
			},
			{
				type: 'doughnut'
				,wrapper: 'chart-1'
				,colors: ['#8DB4A3', '#273C41']
				,obj: undefined
			},
			{
				type: 'radar'
				,wrapper: 'chart-2'
				,colors: ['#C2D2BD', '#5D6A64']
				,obj: undefined
			}
		];

	function trigger(evt, data){
		console.log("Event triggered: "+evt, data);
		switch(evt){
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
	}
	
	function _showDefaultPanel(){
		$(defaultPanel).show();
	}

	function _hideLoader(){
		$(loaderPanel).hide();
	}

	function _showApp(){
		$(appPanel).fadeIn('fast');
	}

	function _createCharts(){
		_createChart0();
		_createChart1();
		_createChart2();
	}

	function _createChart0(){
		var index = 0;
		if(charts[index].obj !== undefined){
			charts[index].obj.destroy();
		}
		var chartData = {
		    labels: [65, 59, 80, 81, 56, 55, 40],
		    datasets: [
		        {
		            label: "Iosif Mpoukas",
					backgroundColor: charts[index].colors[0],
					borderColor: charts[index].colors[1],
					borderWidth: 1,
		            data: [65, 59, 80, 81, 56, 55, 40]
		        }
		    ]
    };
		var ctx = document.getElementById(charts[index].wrapper);
		charts[index] = new Chart(ctx,{
			type: charts[index].type,
			data: chartData,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	}

	function _createChart1(){
		var index = 1;
		if(charts[index].obj !== undefined){
			charts[index].obj.destroy();
		}
		var chartData = {
			labels: ['Label1', 'Label2'],
			datasets: [{
				data: [78, 22],
				backgroundColor: charts[index].colors
			}]
		};
		var ctx = document.getElementById(charts[index].wrapper);
		charts[index] = new Chart(ctx,{
			type: charts[index].type,
			data: chartData,
			options: {
				title: {
					display: true,
					fontSize: 25,
					text: 'Some Title'
				},
				animation: {
					duration: 1500,
					animateScale: true,
					animateRotate: true
				}
			}
		});
	}

	function _createChart2(){
		var index = 2;
		if(charts[index].obj !== undefined){
			charts[index].obj.destroy();
		}
		var chartData = {
			labels: ["Connections", "Stability", "Smoothness", "General score"],
			datasets: [
				{
					label: 'Average User',
					backgroundColor: charts[index].colors[0],
					data: [49, 33, 44, 70]
				},
				{
					label: 'Target Values',
					backgroundColor: charts[index].colors[1],
					data: [59, 49, 155, 93]
				}
			]
		};
		var ctx = document.getElementById(charts[index].wrapper);
		charts[index] = new Chart(ctx,{
			type: charts[index].type,
			data: chartData,
			options: {
				title: {
					display: true,
					fontSize: 25,
					text: 'Some Title'
				},
				animation: {
					duration: 1500,
					animateScale: true,
					animateRotate: true
				}
			}
		});
	}

	return {
		trigger: trigger,
		init: init
	};
})();