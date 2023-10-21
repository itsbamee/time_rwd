const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const [am, pm] = main.querySelectorAll('.screen em');

setInterval(() => {
	changeTheme();
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	if (hr >= 13) {
		am.classList.remove('on');
		pm.classList.add('on');
		hr = hr - 12;
	} else {
		pm.classList.remove('on');
		am.classList.add('on');
	}
	return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
	num = num < 10 ? '0' + num : num;
	numbers[index].innerText = num;
}

//테마 변경함수
function changeTheme() {
	const hr = new Date().getHours();

	const data = [
		{ cond: hr >= 5 && hr < 14, name: 'morning' },
		{ cond: hr >= 14 && hr < 16, name: 'afternoon' },
		{ cond: hr >= 16 && hr < 20, name: 'evening' },
		{ cond: hr >= 20 || hr < 5, name: 'night' },
	];

	data.forEach((item) => {
		if (item.cond) {
			main.className = '';
			main.classList.add(item.name);
		}
	});
}
