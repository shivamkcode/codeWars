/*Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"*/

function whatday(n) {
    return n === 1 ? 'Sunday':
    n === 2 ? 'Monday':
    n === 3 ? 'Tuesday':
    n === 4 ? 'Wednesday':
    n === 5 ? 'Thursday':
    n === 6 ? 'Friday':
    n === 7 ? 'Saturday': "Wrong, please enter a number between 1 and 7"
}

function whatday(num) {
    var days = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}

function whatday(num) {
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    }
    return days[num] || 'Wrong, please enter a number between 1 and 7';
}

function whatday(num) {
    return ['Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'][num-1] || 'Wrong, please enter a number between 1 and 7'
}