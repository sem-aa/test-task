export const obj = {
  start: "10:00",
  appointments: [
    {
      start: "10:45",
      duration: 45,
    },
    {
      start: "13:50",
      duration: 20,
    },
  ],
  end: "15:00",
};

export const getData = fetch("./timeAppoitmen.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

export const freeTimeDoctor = () => {
  const freeTime = [];
  let startWork;
  let appointments;
  let endWork;
  const timeOneApp = 45;
  let key;
  for (key of Object.keys(obj)) {
    if (key === "start") {
      startWork = obj[key];
    }
    if (key === "appointments") {
      appointments = obj[key];
    }
    if (key === "end") {
      endWork = obj[key];
    }
  }
  while (timeToMin(startWork) < timeToMin(endWork)) {
    for (let i = 0; i < appointments.length; i += 1) {
      let start = timeToMin(startWork);
      let curr = timeToMin(appointments[i].start);
      let end = timeToMin(startWork) + timeOneApp;

      if (start <= curr && curr < end) {
        startWork = minToTime(
          timeToMin(appointments[i].start) + appointments[i].duration
        );
      } else {
        if (timeToMin(endWork) - timeToMin(startWork) < timeOneApp) {
          return freeTime;
        }
      }
    }
    freeTime.push(startWork);
    startWork = minToTime(timeToMin(startWork) + timeOneApp);
  }
  console.log(freeTime);
  return freeTime;
};

function timeToMin(time) {
  const arrTime = time.split(":");
  const min = Number(arrTime[0]) * 60 + Number(arrTime[1]);
  return min;
}

function minToTime(min) {
  let hours = Math.trunc(min / 60);
  let minutes = min % 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}`;
}

freeTimeDoctor(obj);
