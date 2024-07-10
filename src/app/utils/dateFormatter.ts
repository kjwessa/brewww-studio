export function formatDate(date: Date): string {
  // Array of shortened month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the day of the month
  const day = date.getDate();
  console.log(day);

  // Get the month name using the getMonth() method (0-11) as an index
  const month = months[date.getMonth()];
  console.log(month);

  // Get the full year
  const year = date.getFullYear();
  console.log(year);

  // Construct the formatted date string
  return `${day} ${month}, ${year}`;
}
