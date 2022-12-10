let messageDom = document.getElementById('messageArea');
function showMsg(bgColor, msg) {
    messageDom.classList.add('show', bgColor);
    messageDom.innerText = msg;
    setTimeout(function () {
        messageDom.classList.remove('show');
        messageDom.classList.remove(bgColor);
    }, 3000);
}
let liveToastBtnDOM = document.getElementById('liveToastBtn');
let taskDOM = document.getElementById('task');
let listDOM = document.getElementById('list');
liveToastBtnDOM.addEventListener('click', function () {
    let counter = localStorage.getItem("counter")
    counter++
    localStorage.setItem("counter", counter)
    if (taskDOM.value === '') {
        showMsg("bg-danger", 'Lütfen bir görev giriniz');
    } else {
        showMsg("bg-success", 'Görev başarıyla eklendi');
        let liDOM = document.createElement('li');
        liDOM.innerHTML = taskDOM.value + `<span class="btn-close float-end" onclick="deleteTask(${counter})"></span>`
        listDOM.appendChild(liDOM);
        localStorage.setItem(`task${counter}`, taskDOM.value)
        taskDOM.value = '';
    }
});
let getCounter = localStorage.getItem("counter")
for (let index = 1; index <= getCounter; index++) {
    if (localStorage.getItem(`task` + index) === null) {
        continue
    }
    let li = document.createElement('li')
    li.innerHTML += localStorage.getItem(`task` + index) + `<span class="btn-close float-end" onclick="deleteTask(${index})"></span>`
    listDOM.appendChild(li)
}

function deleteTask(index) {
    let li = document.querySelector('li')
    localStorage.removeItem(`task` + index)
    li.remove()
}

