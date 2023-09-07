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
  const utcTime = now.toISOString().split("T")[1].split(".")[0];

  currentDay.textContent = `Current Day: ${dayOfWeek}`;
  currentUTC.textContent = `Current UTC Time: ${utcTime}`;

  setTimeout(updateDateTime, 1000);
};

updateDateTime();
