import ApodService from "../Services/ApodService.js";
import store from "../store.js";



//Private
function _draw() {
  console.log(store.State.apod)
  document.getElementById('APOD').innerHTML = store.State.apod.Template
}

//Public
export default class ApodController {
  constructor() {
    console.log(store.State.values)
    store.subscribe("apod", _draw);
  }
}
