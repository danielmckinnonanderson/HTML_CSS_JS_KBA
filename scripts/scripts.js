var trs = document.getElementsByTagName('tr') 

function searchName() {
	var input = document.getElementById('search_input').value
	for (tr of trs){
		tr.style.background = '#1c1c1c'
	}
	for (tr of trs) {
		if (tr.firstElementChild.textContent.includes(input)) {
			//change style of tr bckgrnd color
			tr.style.background = 'grey';
		}
	}
}