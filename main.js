//비구조화 할당
const numbers = document.querySelectorAll('.screen span');
const [am, pm] = document.querySelectorAll('.screen em');

setInterval(() => {
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr >= 12) {
		am.classList.remove('on');
		pm.classList.add('on');
		hr = hr - 12;
	} else {
		pm.classList.remove('on');
		am.classList.add('on');
	}
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
	num = num < 10 ? (num = '0' + num) : num;
	numbers[index].innerText = num;
}
