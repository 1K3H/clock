const circle_1 = document.getElementById('circle1');

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