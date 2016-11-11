var master = (function(){
	var
		homePanel= '#home_panel',
		statsPanel = '#stats_panel',
		rewardsPanel = '#rewards_panel'
		activePanel = '';

	function trigger(evt, data){
		console.log(evt, data);
		switch(evt){
		}
	}

	function init(){
		_showPanel(homePanel);
		_eventListeners();
	}

	function _eventListeners(){
		$('#stats_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(statsPanel).fadeIn();
			});
			activePanel = statsPanel;
		});
		$('#home_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(homePanel).fadeIn();
			});
			activePanel = homePanel;
		});
		$('#rewards_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(rewardsPanel).fadeIn();
			});
			activePanel = rewardsPanel;
		});
	}

	function _showPanel(panel){
		$(panel).fadeIn('fast');
		activePanel = panel;
	}

	return {
		trigger: trigger,
		init: init
	};
})();
