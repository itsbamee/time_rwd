//우리나라 시간대 값을 활용해서 현재 시간값을 출력, 12시가 넘어가면 시간값 앞에 pm을 붙이고 12시 이전이면 am을 붙이기
const title = document.querySelector('h1');
const [em, spanHr, spanMin, spanSec] = title.children;
console.log(em);

/*
if (hr < 12) {
	apm = 'am';
} else {
	apm = 'pm';
}
*/

//위는 복잡하니까 삼항연산자로 아래처럼
// hr < 12 ? (apm = 'am') : (apm = 'pm');

// spanHr.innerText = hr;
// spanMin.innerText = min;
// spanSec.innerText = sec;

//각각의 시간, 분, 초에서 한자리 숫자일때는 앞에 0을 붙여서 출력

setInterval(() => {
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	let apm = hr < 12 ? 'am' : 'pm';
	em.innerText = apm;

	spanHr.innerText = hr < 10 ? '0' + hr : hr;
	spanMin.innerText = min < 10 ? '0' + min : min;
	spanSec.innerText = sec < 10 ? '0' + sec : sec;
}, 1000);
