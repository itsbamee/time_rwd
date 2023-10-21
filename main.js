//비구조화 할당
const numbers = document.querySelectorAll('.screen span');
//const [spanHr, spanMin, spanSec]  = document.querySelectorAll('.screen span');

setInterval(() => {
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

// setInterval(() => {
// 	const now = new Date();
// 	let hr = now.getHours();
// 	let min = now.getMinutes();
// 	let sec = now.getSeconds();

// 	if (hr < 10) hr = '0' + hr;
// 	if (min < 10) min = '0' + min;
// 	if (sec < 10) sec = '0' + sec;

// 	numbers[0].innerText = hr;
// 	numbers[1].innerText = min;
// 	numbers[2].innerText = sec;
//   // spanHr.innerText = hr;
// 	// spanMin.innerText = min;
// 	// spanSec.innerText = sec;
// }, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();
	return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
	num = num < 10 ? (num = '0' + num) : num;
	numbers[index].innerText = num;
}
