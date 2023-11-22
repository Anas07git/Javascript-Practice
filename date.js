const cc = console.log
let now = new Date()
cc(now)

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
cc( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
cc( Jan02_1970 )

// new Date(year, month, date, hours, minutes, seconds, ms)

// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

// The year should have 4 digits.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0
let ex= new Date(2023,9,3)
cc(ex)

// Accessing date components

// getFullYear() - 4 digit year
// getMonth()  - 0(Jan)-11(Dec)
// getDate() - Day of month 1-31
// getHours(),getMinutes(),getSeconds(),getMilliseconds
// getDay() - Day of week from 0(Sunday)-6(Saturday)

cc(now.getFullYear(),now.getMonth(),now.getDate(),now.getDay())

// Setting Date Components

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
now.setFullYear(2024,5,5)
cc(now)

// Q : Show weekdays
function getWeekDays(date){
    let days= ['Su','Mo','Tu','We','Th','Fr','Sa']

    return days[date.getDay()]
}
let date= new Date(2023,4,5)
cc(getWeekDays(date))

