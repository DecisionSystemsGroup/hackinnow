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
				description: "-50% σε όλες τις πίτσες <br><span style=\"color:#00b300;border: 1px solid #808080;border-radius: 5px;padding :3px\"><b>More Info..</b></span>",
				startDate: (new Date('August 5, 2009 00:00:00 pm GMT+0')),
				endDate: null
			},
			{        title: '<span class=\"timeTitle\">Village Cinemas</span>',
				description: "2 εισιτήρια στην τιμή του ενός <br><span style=\"color:#00b300;border: 1px solid #808080;border-radius: 5px;padding :3px\"><b>More Info..</b></span>",
				startDate: (new Date('August 10, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
            {     title: '<span class=\"timeTitle\">Allou! Fun Park</span>',
				description: "2 ΗΜΕΡΗΣΙΑ PASS ΣΤΗΝ ΤΙΜΗ ΤΟΥ 1 <br><span style=\"color:#00b300;border: 1px solid #808080;border-radius: 5px;padding :3px\"><b>More Info..</b></span>",
				startDate: (new Date('August 15, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "<span class=\"timeTitle\">PLANET</span>",
				description: "-60% στα PLANET Fitness and More <br><span style=\"color:#e60000;border: 1px solid #808080;border-radius: 5px;padding :3px\"><b>Ιncrease your score..</b></span>",
				startDate: (new Date('August 20, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: '<span class=\"timeTitle\">Groupama</span>',
				description: "-5% ΣΤΑ ΑΣΦΑΛΙΣΤΡΑ ΤΟΥ ΟΧΗΜΑΤΟΣ ΣΟΥ <br><span style=\"color:#e60000;border: 1px solid #808080;border-radius: 5px;padding :3px\"><b>Ιncrease your score..</b></span>",
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
