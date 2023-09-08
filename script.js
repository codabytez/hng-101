const updateDateTime = () => {
  const currentDay = document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  );
  const currentUTC = document.querySelector("[data-testid='currentUTCTime']");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];

  const localTime = now.getTime();

  currentDay.textContent = `Current Day: ${dayOfWeek}`;
  currentUTC.textContent = `Current UTC Time: ${localTime}`;

  setTimeout(updateDateTime, 1000);
};

updateDateTime();
