// let title = " "

// if (title === " "){
//     console.log("Название задачи не указано");  
// }else {
//     console.log("Задача", title);
// }

// let task = 5;

// if (tasks === 0){
//     console.log("Список пуст");
// }else if (tasks <= 3){
//     console.log("Немного задач");
// }else{
//     console.log("Много задач");
// } 


// // Задача скидка в магазине:
// let amount = 0; 

// if (amount === 0) {
//     console.log("Корзина пустая");
// } else if (amount < 1000) {
//     console.log("Скидка не применяется");
// } else if (amount >= 1000 && amount < 5000) {
//     console.log("Скидка 5%");
// } else if (amount >= 5000) {
//     console.log("Скидка 10%");
// }



// let cites = ["Тюмень", "Мурманск", "Юровка", "Пермь"]

// console.log(sites[2])

// let task = {
//     id = 1,
//     title: "Вася не виноват ни в чем" 
//     status: "активна"
// }

// console.log(task.status)

// let tasks = [
//     {id: 1, title: "Вася ни в чём не виноват 100%", status: "активна"},
//     {id: 2, title: "Позвонить психиатру", status: "выполнена"},
//     {id: 3, title: "Сдать Афину в психушку", status: "активна"}
// ]

// tasks.push({id: 4, title: "Порогунка", status: "активна"})

// console.log(tasks)

// console.log(task.title.length)




// function filterByStatus(tasks, status){
//     return tasks.filter(function (task) {
//         return task.status === status
//     })
// }



// function sortByTitle(tasks){
//     tasks.sort(function(a, b) {
//         return a.title.localeCompare(b.title)
//     })
//     return tasks
// }

// function searchByTitle(tasks, query){
//     let q = String(query).toLowerCase()
//     return tasks.filter(function (task){
//         return task.title.toLowerCase().indexOf(q) !== -1
//     })
// }

// function removeTaskById(tasks, id){
//     return tasks.filter(function (task) {
//         return task.id !== id
//     })
// }

// let tasksArr = [
//     { id: "1", title: "Купить молока", status: "актина" },
//     { id: "2", title: "Позвонить врачу", status: "выполнена" },
//     { id: "3", title: "Сходить на тренировку", status: "актина" }
// ]

// console.log(removeTaskById(tasksArr, 2));




function findTaskByTitle(tasks, title) {

  for (let task of tasks) {
    if (task.title === title) {
      return task; 
    }
  }
    return "Задача не найдена";
}


let tasksArr = [
    { id: "1", title: "Купить молока", status: "актина" },
    { id: "2", title: "Выиграть спор с Афиной", status: "провалена" },
    { id: "3", title: "Уйти есть американ бургеры", status: "выполнена" }
]

const найдено = findTaskByTitle(tasksArr, "Купить молока");
console.log("ЗАДАЧА НАЙДЕНА!"); 


const ненайдено = findTaskByTitle(tasksArr, "Заставить кошку бросить котят");
console.log("Задачи не существует..."); 

