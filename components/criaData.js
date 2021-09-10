import { Tarefa } from "./criaTarefa.js";

export const criaData = (data) =>{
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    let dataMoment = moment(data, 'DD/MM/YYYY')
    let dataTopo = document.createElement("li");
    let content = `<p class="content-data">${dataMoment.format("DD/MM/YYYY")}</p>`;

   

    dataTopo.innerHTML = content;

    tarefas.forEach((task, id) =>{
        let dia = moment(task.dataFormatada, "DD/MM/YYYY");

        let diff = dataMoment.diff(dia)
        if(diff === 0){
            dataTopo.appendChild(Tarefa(task, id));
        }
    });

    return dataTopo;
}