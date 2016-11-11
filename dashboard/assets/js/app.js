var app = (function(){
	var 
		defaultPanel= '#panel-main'
		,appPanel = '#wrapper-app'
		,loaderPanel = '#wrapper-loader';

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

	return {
		trigger: trigger,
		init: init
	};
})();
