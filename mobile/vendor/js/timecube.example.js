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
				title: 'Pizzafan',
				description: "-50% σε όλες τις πίτσες",
				startDate: (new Date('August 5, 2009 10:29:00 pm GMT+0')),
				endDate: null
			},
			{        title: 'Village Cinemas',
				description: "2 εισιτήρια στην τιμή του ενός",
				startDate: (new Date('August 10, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
            {     title: 'Allou! Fun Park',
				description: "2 ΗΜΕΡΗΣΙΑ PASS ΣΤΗΝ ΤΙΜΗ ΤΟΥ 1",
				startDate: (new Date('August 15, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "PLANET",
				description: "-60% στα PLANET Fitness and More",
				startDate: (new Date('August 20, 2009 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: 'Groupama',
				description: "-5% ΣΤΑ ΑΣΦΑΛΙΣΤΡΑ ΤΟΥ ΟΧΗΜΑΤΟΣ ΣΟΥ ",
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
	showDate: false
});
