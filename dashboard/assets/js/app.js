var app = (function(){
	var 
		defaultPanel= '#panel-main'
		,appPanel = '#wrapper-app'
		,loaderPanel = '#wrapper-loader'
		,charts = [undefined, undefined, undefined];

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
		_createChart1();
		_createChart2();
		_createChart3();
	}

	function _createChart1(){
		var index = 0;
		if(charts[index] !== undefined){
			charts[index].destroy();
		}
		var chartData = {
			labels: ['Label1', 'Label2'],
			datasets: [{
				data: [78, 22],
				backgroundColor:["#d5d5d5", "#FF6384"],
				hoverBackgroundColor:["#36A2EB", "#FF6384"]
			}]
		};
		var ctx = document.getElementById('chart-1');
		charts[index] = new Chart(ctx,{
			type: 'doughnut',
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
		var index = 1;
		if(charts[index] !== undefined){
			charts[index].destroy();
		}
		var chartData = {
			labels: ['Label1', 'Label2'],
			datasets: [{
				data: [55, 45],
				backgroundColor:["#333", "#123654"],
				hoverBackgroundColor:["#444", "#123654"]
			}]
		};
		var ctx = document.getElementById('chart-2');
		charts[index] = new Chart(ctx,{
			type: 'doughnut',
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

	function _createChart3(){
		var index = 3;
		if(charts[index] !== undefined){
			charts[index].destroy();
		}
		var chartData = {
			labels: ['Label1', 'Label2'],
			datasets: [{
				data: [33, 125],
				backgroundColor:["#d72f11", "#123aaa"],
				hoverBackgroundColor:["#d62e11", "#123aaa"]
			}]
		};
		var ctx = document.getElementById('chart-3');
		charts[index] = new Chart(ctx,{
			type: 'doughnut',
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
