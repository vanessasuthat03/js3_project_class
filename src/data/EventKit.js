const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`
const EVENT_LIST_URL = `${ROOT_URL}events/events/`

export default class {
  async login(email, password) {
    const payload = { email, password }
    return fetch(LOGIN_URL, {
      method: "POST",
      headers: this.getLoginHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async fetchEventList() {
    return fetch(EVENT_LIST_URL, {
      headers: this.getPrivatHeaders()
    })
  }

  async fetchMainPage(eventSlug) {
    const mainPageUrl = `${ROOT_URL}cms/${eventSlug}/main-page/`

    return fetch(mainPageUrl, {
      headers: this.getPrivatHeaders()
    })
  }

  setToken(token) {
    return localStorage.setItem("EVENT_TOKEN", token)
  }
  getToken() {
    return localStorage.getItem("EVENT_TOKEN")
  }

  getLoginHeaders() {
    return {
      "Content-Type": "application/json"
    }
  }

  getPrivatHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`
    }
  }
}
