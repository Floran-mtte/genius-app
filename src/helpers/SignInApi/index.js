import axios from 'axios'

export default class SignInApi {
    constructor() {
        this.apiEndpoint = process.env.REACT_APP_API_LOGIN_ENDPOINT
        this.client = null
    }

    init = () => {
        let headers = {
            Accept: 'application/json'
        }

        this.client = axios.create({
            baseURL: this.apiEndpoint,
            timeout: 31000,
            headers: headers
        })

        return this.client
    }

    signIn = params => {
        return this.init().post('/users/login', params)
    }
}
