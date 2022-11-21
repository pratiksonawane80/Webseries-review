import Vue from 'vue'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = value => {
  return formatDate(value);
};

const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
  }
}

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const formattedDate = day + nth(day) + " " + months[month] + " " + year;
  return formattedDate;
}

Vue.filter('date', dateFilter)
