

const concludeTask = (atualiza, id) => {
    
    let tarefaCadastrada = JSON.parse(localStorage.getItem('tarefas'));

    tarefaCadastrada[id].concluida = !tarefaCadastrada[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastrada));

    atualiza();
    
}

 const buttonConclude = (atualiza, id) => {
    const btnConclude = document.createElement('button');

    btnConclude.classList.add('check-button');
    btnConclude.innerText = 'concluir';
    btnConclude.addEventListener('click', ()=> concludeTask(atualiza, id));
    return btnConclude;
}

export default buttonConclude