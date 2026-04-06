const getDatesInRange = (startDate, endDate) => {
  const dates = [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  start.setHours(0,0,0,0);
  end.setHours(0,0,0,0);

  while (start < end) {  
    dates.push(new Date(start));
    start.setDate(start.getDate() + 1);
  }

  return dates;
};

module.exports = getDatesInRange;