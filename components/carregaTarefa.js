import { filtroData, sortData } from "../services/data.js";
import { criaData } from "./criaData.js";


export const carregaTarefa = () =>{
    let lista = document.querySelector("[data-list]");
    let tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

    lista.innerHTML = " "; //para limpar a lista e não carregar novamente;
    let datasUnicas = filtroData(tarefasCadastradas)
    sortData(datasUnicas);
    datasUnicas.forEach((dia)=>{
      

        lista.appendChild(criaData(dia))
    })
}