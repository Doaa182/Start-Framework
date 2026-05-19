export const fetchPrayerTimes = async (city, country, date) => {
  const res = await fetch(
    `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}`,
  );

  const data = await res.json();

  return data.data.timings;
};
