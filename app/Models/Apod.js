export default class Apod {
    constructor(data) {
        this.title = data.title || ''
        this.date = data.date
        this.explanation = data.explanation
        this.url = data.url
        this.service_version = data.service_version
    }

    get Template() {
        return /*html*/ `
            <div class="text-center m-2 shadow border border-primary rounded-lg col-8">
                <h3>${this.title}</h3>
                <p>DATE : ${this.date}</p>
                <p>${this.explanation}</p>
                <img class="rounded mb-3 img-fluid" src='${this.url}'/>
            </div>
        `
    }
}