import { handleNovoItem } from "./components/criaTarefa.js";
import { carregaTarefa } from "./components/carregaTarefa.js";
const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', handleNovoItem);

carregaTarefa();