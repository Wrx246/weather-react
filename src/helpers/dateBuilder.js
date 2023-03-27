export const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August',
        'September', 'October', 'November', 'December'];
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let day = days[d.getDay() - 1];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}