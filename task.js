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
//     { id: 1, title: "Купить молока", status: "актина" },
//     { id: 2, title: "Позвонить врачу", status: "выполнена" },
//     { id: 3, title: "Сходить на тренировку", status: "актина" },
//     { id: 4, title: "Прочитать книгу", status: "провалена" },
//     { id: 5, title: "Прийти на урок", status: "актина" }
// ]

// for (let i = 0; i < tasksArr.lenght; i++){
//   console.log(tasksArr[i].id + ":", tasksArr[i].title);
// }

// for (let title of tasksArr){
//     console.log(title.id + ": ", title.title);
// }

// let i = 0;
// let total = 0;
// let done = 0;
// let active = 0;

// while(i < tasksArr.length) {
//   total++
// if(tasksArr[1].status == "выполнена") {
//     done++
// }else{
//     active++
// }
// i++
// }

// console.log ("Всего:", total, "|Выполнено:" done, "Активных:" active, "|Провалено: "  )


// for(let task of tasksArr){
//     if(task.status === "активна")
//       console.log("Активная задача", task.title);
//     }





// function findTaskByTitle(tasks, title) {

//   for (let task of tasks) {
//     if (task.title === title) {
//       return task; 
//     }
//   }
//     return "Задача не найдена";
// }


// let tasksArr = [
//     { id: "1", title: "Купить молока", status: "актина" },
//     { id: "2", title: "Выиграть спор с Афиной", status: "провалена" },
//     { id: "3", title: "Уйти есть американ бургеры", status: "выполнена" }
// ]

// const найдено = findTaskByTitle(tasksArr, "Купить молока");
// console.log("ЗАДАЧА НАЙДЕНА!"); 


// const ненайдено = findTaskByTitle(tasksArr, "Заставить кошку бросить котят");
// console.log("Задачи не существует..."); 


function renderTask(taskData) {
const input = document.querySelector('.form-add_input')
const addButton = document.querySelector('.form-add_button')
const container = document.querySelector('.tasks')
const task = document.createElement('div')
task.classList.add('task')

const content = document.createElement('div')
content.classList.add('task_content')
task.appendChild(content)

const title = document.createElement('div')
title.classList.add('task_title')

const meta = document.createElement('div')
meta.classList.add('task_meta')

content.append(title, meta)

const actions = document.createElement('div')
actions.classList.add('tasks_actions')
task.append(actions)

const editBtn = document.createElement('button')
editBtn.classList.add('task__action', 'task__action--edit')
editBtn.title = 'Редактировать'
editBtn.innerHTML = `
<svg class="task__icon" viewBox="0 0 24 24" fill="none"
stroke="#6f64a3" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round">
<path d="M12 20h9" />
<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5
3.5z" />
</svg>`

const deleteBtn = document.createElement('button')
deleteBtn.classList.add('task_action', 'task_action--delete')
deleteBtn.title = 'Удалить'
deleteBtn.innerHTML = `
<svg class="task__icon" viewBox="0 0 24 24" fill="none"
stroke="#cb6e6e" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round">
<polyline points="3 6 5 6 21 6" />
<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
<path d="M10 11v6" />
<path d="M14 11v6" />
<path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
</svg>`

actions.append(editBtn, deleteBtn)
task.append(content, actions)
return task
}

const container = document.querySelector('main') 

const task1 = renderTask({
    text: "Сходить на прогулку",
    date: "30.02.2050"
})

const task2 = renderTask({
    text: "Поить чай",
    date: "30.03.2025"
})

container.append(task1, task2)

const searchInput = document.querySelector('.toolbar__search')
const footer = document.querySelector('.footer-controls')
const sortSelect = document.querySelector('.toolbar__sort')

