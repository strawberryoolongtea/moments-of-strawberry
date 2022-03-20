const colors = [
  "#43C6AC",
  "#F8FFAE",
  "#FFAFBD",
  "#FFC3A0",
  "#E8CBC0",
  "#636FA4",
];

const bgColor1 = document.querySelector("#bg-color-1");
const bgColor2 = document.querySelector("#bg-color-2");
const bgDeg = document.querySelector("#bg-deg");

const setColors = () => {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  const randomDeg = Math.floor(Math.random() * 180);
  bgColor1.value = randomColor1;
  bgColor2.value = randomColor2;
  bgDeg.value = randomDeg;
  document.body.style.background = `linear-gradient(${randomDeg}deg, ${randomColor1}, ${randomColor2})`;
};

const changeColors = () => {
  document.body.style.background = `linear-gradient(${bgDeg.value}deg, ${bgColor1.value}, ${bgColor2.value})`;
};

setColors();
bgColor1.addEventListener("change", changeColors);
bgColor2.addEventListener("change", changeColors);
bgDeg.addEventListener("change", changeColors);
