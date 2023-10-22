const main = document.querySelector('main');
const numbers = main.querySelectorAll('.screen span');
const menus = main.querySelectorAll('nav span');
const auto = main.querySelector('.auto');
const [am, pm] = main.querySelectorAll('.screen em');
let themeData = [];
let timer = null;

getData();

setInterval(() => {
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

changeTheme();

//메뉴클릭 이벤트
menus.forEach((menu) => {
	menu.addEventListener('click', (e) => {
		menus.forEach((menu) => menu.classList.remove('on'));
		e.target.classList.add('on');
		//changeTheme 안쪽의 setInterval이 리턴하고 있는 timer값을 제거해서 롤링 정지
		clearInterval(timer);
		main.className = '';
		main.classList.add(e.target.innerText.toLowerCase());
	});
});

//오토버튼 클릭시 changeTheme 호출해서 다시 롤링 테마 적용
auto.addEventListener('click', () => {
	changeTheme();
});

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
//자동 롤링기능 포함
function changeTheme() {
	timer = setInterval(() => {
		main.className = '';
		themeData.forEach((item) => item.cond && main.classList.add(item.name));
	}, 1000);
}

/*
const data = [
	{ cond: new Date().getHours() >= 5 && new Date().getHours() < 12, name: 'morning' },
	{ cond: new Date().getHours() >= 12 && new Date().getHours() < 16, name: 'afternoon' },
	{ cond: new Date().getHours() >= 16 && new Date().getHours() < 19, name: 'evening' },
	{ cond: new Date().getHours() >= 19 || new Date().getHours() < 5, name: 'night' },
];
*/
