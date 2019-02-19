(function() {
	class Main {
		constructor(event, day, date) {
			this.event = event;
			this.day = day;
			this.date = date;
		}

		add(id) {
			let div = document.querySelector(`#${id}`);
			let a = document.createElement("div");
			a.setAttribute("class", "event");
			let b = document.createTextNode(this.event);
			a.appendChild(b);
			div.appendChild(a);
		}
	}

	let eventList = [];
	let list = {"0":"Sunday", "1":"Monday", "2":"Tuesday", "3":"Wednesday", "4":"Thursday", "5":"Friday", "6":"Saturday"};

	for(let i=0; i<7; i++) {
		let currentDate = new Date(new Date().getTime() + (i*24)*60*60*1000);
		let date = currentDate.getDate();
		let month = currentDate.getMonth() + 1;
		let year = currentDate.getFullYear();
		let day = list[currentDate.getDay()];

		let dateDiv = document.querySelector(`#date${i}`);
		let dayDiv = document.querySelector(`#day${i}`);

		dateDiv.innerHTML = `${date}-${month}-${year}`;
		dayDiv.innerHTML = day;
	}

	let container = document.querySelector('#container');
	let overlay = document.querySelector('.overlay');
	let form = document.querySelector('#event-form');
	let selectedDay;
	let selectedDate;
	let event;
	let index;
	let selectedDiv;

	container.addEventListener('click', function(e) {
		selectedDiv = e.target.id;
		selectedDay = e.target.children[0].innerHTML;
		selectedDate = e.target.children[1].innerHTML;				
		overlay.classList.add('show');
	})

	overlay.addEventListener('click', function(e) {
		if(e.target.classList.contains('overlay')) {
			overlay.classList.remove('show');
		}
	})

	form.addEventListener("submit", function(e) {
		e.preventDefault();

		event = document.querySelector('#event-name').value;
		let newInstance = new Main(event, selectedDay, selectedDate);
		eventList.push(newInstance);
		index = eventList.length - 1;
		eventList[index].add(selectedDiv);
		overlay.classList.remove('show');
		console.log(eventList);
	})
})();