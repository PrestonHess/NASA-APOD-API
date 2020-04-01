import store from "../store.js";
import Apod from "../Models/Apod.js"

let _key = 'apod?api_key=vesDpcWW3lP8fYuFbdueZg0ASdHEl9aMpOxt8lEp';

// @ts-ignore axios
let _api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 15000
})

class ApodService {

  constructor() {
    this.getAPOD()
  }
  getAPOD() {
    _api.get(_key)
      .then(res => {
        let apod = new Apod(res.data)
        if (apod) {
          store.commit('apod', apod)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

}

const apodService = new ApodService();
export default apodService;
