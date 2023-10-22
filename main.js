const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const [am, pm] = main.querySelectorAll('.screen em');

let themeData = [];
getData();

setInterval(() => {
	getTime().forEach((num, idx) => setTime(num, idx));
	changeTheme();
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

//데이터 fetching함수
async function getData() {
	const data = await fetch('data.json');
	const json = await data.json();

	json.theme.forEach((el) => {
		const key = Object.keys(el)[0];
		const [startTime, endTime] = el[key];

		key === 'night'
			? themeData.push({ cond: new Date().getHours() >= endTime || new Date().getHours() < startTime, name: key })
			: themeData.push({ cond: new Date().getHours() >= startTime && new Date().getHours() < endTime, name: key });
	});

	console.log(themeData);
}

//테마 변경 함수
function changeTheme() {
	main.className = '';
	themeData.forEach((item) => item.cond && main.classList.add(item.name));
}

/*
const data = [
	{ cond: new Date().getHours() >= 5 && new Date().getHours() < 12, name: 'morning' },
	{ cond: new Date().getHours() >= 12 && new Date().getHours() < 16, name: 'afternoon' },
	{ cond: new Date().getHours() >= 16 && new Date().getHours() < 19, name: 'evening' },
	{ cond: new Date().getHours() >= 19 || new Date().getHours() < 5, name: 'night' },
];
*/
