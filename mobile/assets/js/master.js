var master = (function(){
	var
		homePanel= '#home_panel',
		loginPanel= '#login_panel',
		statsPanel = '#stats_panel',
		rewardsPanel = '#rewards_panel'
		activePanel = '';

	function trigger(evt, data){
		console.log(evt, data);
		switch(evt){
		}
	}

	function init(){
		_eventListeners();
	}

	function _eventListeners(){
		$('#stats_button').on('click', function(){
			$(activePanel).fadeOut(function(){
				$(loginPanel).fadeIn();
			});
			activePanel = loginPanel;
		});
		$('#login_btn').on('click', function(){
			$(loginPanel).fadeOut(function(){
				$('.navbar').fadeIn();
				$(homePanel).fadeIn();
			});
			activePanel = homePanel;
			$('#page_name').text('Iosif Mpoukas');
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
