export function formatDate(dateString: string): string {
  // Parse the input string into a Date object
  const date = new Date(dateString);
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
  // Get the month name using the getMonth() method (0-11) as an index
  const month = months[date.getMonth()];
  // Get the full year
  const year = date.getFullYear();
  // Construct the formatted date string
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}
