const container = document.querySelector('.container'),
	spanNum = document.getElementById('spanNum')
let num = 0

function resetFun() {
	num = 0
	spanNum.textContent = 0
}
function decreaseFun() {
	num--

	spanNum.textContent = num
}
function increaseFun() {
	num++
	spanNum.textContent = num
}


// use делегирование событий 
container.addEventListener('click', (e) => {
	if (e.target.dataset.oper == 'reset') resetFun()
	if (e.target.dataset.oper == 'decrease') decreaseFun()
	if (e.target.dataset.oper == 'increase') increaseFun()
	// check on red
	if (num < 0) {
		spanNum.classList.add('red')
	} else if (num == 0) {
		spanNum.classList.remove('red')
		spanNum.classList.remove('green')
	} else if (num > 0) {
		spanNum.classList.add('green')
	}
})
