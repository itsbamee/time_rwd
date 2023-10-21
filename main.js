/*
  생성자 함수
  - 객체 복사본을 생성해주는 함수

  인스턴스 (객체)
  - 생성자 함수를 통해서 복사가 된 객체

  프로토타입(생성자를 통해 만들어진 객체 복사본들이 공유하는 공통의 저장공간)
  - 각각의 인스턴스 객체들이 공유할 수 있는 함수들이 등록되는 공간
*/
const monthName = ['January', 'February', 'March,', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayName = ['sunday', 'monday', 'tueswday', 'wednseday', 'thursday', 'friday', 'saturday'];

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

//우리나라 시간대를 전세계 표준시로 변환해서 반환하는 것이 toGMTString

const gmtNow = now.toUTCString();
console.log(gmtNow);
