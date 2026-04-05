const now = new Date()
console.log(now.toLocaleString());

const day = now.getDate().toString().padStart(2, '0')
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const year = now.getFullYear()

const hours = now.getHours().toString().padStart(2, '0')
const minutes = now.getMinutes().toString().padStart(2, '0')
const seconds = now.getSeconds().toString().padStart(2, '0')

console.log(`${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`);



// ДЗ 

function getTimeOfDay() {
    const currentHour = now.getHours();
    if (currentHour >= 6 && currentHour < 12) {
        return "Утро";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "День";
    } else if (currentHour >= 18 && currentHour < 23) {
        return "Вечер";
    } else {
        return "Ночь";
    }
}
console.log(getTimeOfDay());

