// Full month names in English - useful for custom formatting or display
export const monthNames = [
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
  "December",
];

// Abbreviated month names in English - useful for compact displays
export const monthNamesAbbr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// Configuration options for different date/time format patterns
// Uses Intl.DateTimeFormatOptions for standardized formatting
const formatOptions: { [key: string]: Intl.DateTimeFormatOptions } = {
  // Format: "January 1, 2024"
  longDateStamp: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  // Format: "Jan 1, 2024"
  shortDateStamp: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  // Format: "01/01/2024"
  numericDate: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
  // Format: "January 1, 2024 at 2:30 PM EDT"
  dateAndTime: {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Uses local timezone by default
  },
  // Format: "2:30 PM"
  timeOnly: {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }
};

// Type definition for formatDate function arguments
interface FormatDateArgs {
  date: string | Date;           // Input date (can be Date object or date string)
  format?: keyof typeof formatOptions;  // Format option from the ones defined above
  timeZone?: string;            // Optional timezone (e.g., 'America/New_York')
}

/**
 * Formats a date according to the specified format pattern
 * @param date - The date to format (Date object or date string)
 * @param format - The desired format pattern (defaults to "longDateStamp")
 * @param timeZone - Optional timezone to use for formatting
 * @returns Formatted date string
 * 
 * @example
 * formatDate({ date: new Date() }) // Returns "March 14, 2024"
 * formatDate({ date: new Date(), format: "numericDate" }) // Returns "03/14/2024"
 * formatDate({ date: new Date(), format: "dateAndTime" }) // Returns "March 14, 2024 at 2:30 PM EDT"
 */
export function formatDate({ 
  date, 
  format = "longDateStamp", 
  timeZone 
}: FormatDateArgs): string {
  try {
    // Create Date object and validate it
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date');
    }

    // Merge format options with timezone if provided
    const options = {
      ...formatOptions[format],
      ...(timeZone ? { timeZone } : {})
    };

    // Use Intl.DateTimeFormat for locale-aware date formatting
    return new Intl.DateTimeFormat("en-US", options).format(dateObj);
  } catch (e) {
    console.error("Error formatting date", e);
    return String(date); // Return original input if formatting fails
  }
}

/**
 * Utility function to pad single-digit numbers with a leading zero
 * @param num - Number to pad
 * @returns Padded number as string
 * 
 * @example
 * padNumber(5) // Returns "05"
 * padNumber(10) // Returns "10"
 */
export function padNumber(num: number): string {
  return num < 10 ? `0${num}` : String(num);
}
