
const removeTask = (atualiza, id) =>{
    let index = id;
    let tarefaCadastrada = JSON.parse(localStorage.getItem('tarefas'));
    tarefaCadastrada.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastrada))
    atualiza();
}

const buttonRemove = (atualiza, id) => {
    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('delete-button');
    buttonRemove.innerText ='delete';
    buttonRemove.addEventListener('click', ()=>removeTask(atualiza, id));
    return buttonRemove;
}

export default buttonRemove
