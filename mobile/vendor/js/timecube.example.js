// Prevent scrolling
document.body.addEventListener('touchstart', function(e){  
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){ 
	e.preventDefault();
});


var json = [{
				title: '<span class=\"timeTitle\">Pizzafan</span>',
				description: "<img src=\"http://www.thessalonikipress.gr/wp-content/uploads/2014/06/pizza-fan-logo.jpg\" class=\"img-responsive\" style=\"width:150px\">-50% σε όλες τις πίτσες <br><button type=\"button\" class=\"btn btn-success btn-xs\">Read More...</button>",
				startDate: (new Date('August 5, 2009 00:00:00 pm GMT+0')),
				endDate: null
			},
			{        title: '<span class=\"timeTitle\">Village Cinemas</span>',
				description: "<img src=\"https://www.cosmote.gr/dyn/dyn/MEDIA_CustomProductCatalog/m820231_villagelogo_198x87.png\" class=\"img-responsive\">2 εισιτήρια στην τιμή του ενός <br><button type=\"button\" class=\"btn btn-success btn-xs\">Read More...</button>",
				startDate: (new Date('August 10, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
            {     title: '<span class=\"timeTitle\">Allou! Fun Park</span>',
				description: "<img src=\"https://www.cosmote.gr/dyn/dyn/MEDIA_CustomProductCatalog/m860035_logo_allou_87_pixels.jpg\" class=\"img-responsive\">2 ΗΜΕΡΗΣΙΑ PASS ΣΤΗΝ ΤΙΜΗ ΤΟΥ 1 <br><button type=\"button\" class=\"btn btn-success btn-xs\">Read More...</button>",
				startDate: (new Date('August 15, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "<span class=\"timeTitle\">PLANET</span>",
				description: "<img src=\"https://www.cosmote.gr/dyn/dyn/MEDIA_CustomProductCatalog/m1140321_planet_logo-01.png\" class=\"img-responsive\">-60% στα PLANET Fitness and More <br><b style=\"color:#273C41;\">Ιncrease your score..</b>",
				startDate: (new Date('August 20, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: '<span class=\"timeTitle\">Cosmote</span>',
				description: "<img src=\"http://www.prosec.gr/wp-content/uploads/2016/03/cosmote_logo.png\" class=\"img-responsive\">One month free calls to Cosmote and 300' to others, 2GB and 200 SMS for 15$/mo -3% on annual premium <br><b style=\"color:#273C41;\">Ιncrease your score..</b>",
				startDate: (new Date('August 25, 2009 00:00:00 am GMT+0')),
				endDate: null
			}];





$("#timeline").timeCube({
	data: json,
	granularity: "year",
	startDate: new Date('August 1, 2009 10:20:00 pm GMT+0'),
	endDate: new Date('September 4, 2009 02:20:00 am GMT+0'),
	nextButton: false,
	previousButton: false,
	showDate: true
});
