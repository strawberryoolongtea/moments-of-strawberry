const clock = document.querySelector("#clock");

const getTime = () => {
  const today = new Date();

  const getStringHMS = (hms) => String(hms).padStart(2, "0");

  const currentHours = today.getHours();
  const currentMins = today.getMinutes();
  const currentSec = today.getSeconds();

  const hours = getStringHMS(currentHours);
  const mins = getStringHMS(currentMins);
  const sec = getStringHMS(currentSec);

  clock.innerText = `${hours} : ${mins} : ${sec}`;
};

getTime();
setInterval(getTime, 1000);
