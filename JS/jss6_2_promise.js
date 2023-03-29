const todos= [
    { title: "Todo 1", description : "kursa git"},
    { title: "Todo 2", description : "derse gir"},
    { title: "Todo 3", description : "odev yap"}
];

function todolist () {
    setTimeout(() => { todos.forEach((item) => {
        console.log(item)
    }
        )    
    }, 1000);
}

function newTodo (todo) {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {  todos.push(todo);
            const e =false;
            if(!e) {
                resolve();
            } else {
                reject("Hata var...");
            }
        }, 2000); 
    })    
}

newTodo ( { title: "Todo 4", description : "derse hazirlik yap"})
.then (() => {
    console.log("Yeni Liste");
    todolist();
})
.catch(e => {
    console.log(e);
})
