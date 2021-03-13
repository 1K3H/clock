const circle_1 = document.getElementById('circle1');
const circle_3 = document.getElementById('circle3');

// 눈금 그리기
for (let i = 0; i < 30; i++) {
  const line = document.createElement('div');
  line.classList.add('line');
  line.style.transform = `rotate(${6 * i}deg)`;
  if (i % 5) {
    line.classList.add('thin');
  } else {
    line.classList.add('thick');
  }
  circle_1.appendChild(line);
}

// 숫자 넣기
let right = 3;
let left = 9;

for(let i = 0; i < 6; i++) {
  const num_container = document.createElement('div');
  num_container.classList.add('num-container');
  num_container.style.transform = `rotate(${30 * i}deg)`;
  num_container.innerHTML = `
    <div class="num ${i === 0 || i === 3 ? 'highlight' : ''}" style="transform: rotate(-${30 * i}deg)">${left > 12 ? left - 12 : left}</div>
    <div class="num ${i === 0 || i === 3 ? 'highlight' : ''}" style="transform: rotate(-${30 * i}deg)">${right}</div>
  `;
  circle_3.appendChild(num_container);
  right++;
  left++;
}