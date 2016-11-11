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
		$('#page_name').text('Iosif Mpoukas');
		_showPanel(homePanel);
		_eventListeners();
	}

	function _eventListeners(){
		$('#stats_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(statsPanel).fadeIn();
			});
			activePanel = statsPanel;
			$('#page_name').text('Stats');
		});
		$('#home_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(homePanel).fadeIn();
			});
			activePanel = homePanel;
			$('#page_name').text('Iosif Mpoukas');
		});
		$('#rewards_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(rewardsPanel).fadeIn();
			});
			activePanel = rewardsPanel;
			$('#page_name').text('Rewards');
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
