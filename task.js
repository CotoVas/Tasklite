let title = " "

if (title === " "){
    console.log("Название задачи не указано");  
}else {
    console.log("Задача", title);
}

let task = 5;

if (tasks === 0){
    console.log("Список пуст");
}else if (tasks <= 3){
    console.log("Немного задач");
}else{
    console.log("Много задач");
} 


// Задача скидка в магазине:
let amount = 0; 

if (amount === 0) {
    console.log("Корзина пустая");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount < 5000) {
    console.log("Скидка 5%");
} else if (amount >= 5000) {
    console.log("Скидка 10%");
}