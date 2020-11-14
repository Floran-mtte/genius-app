import axios from 'axios'

export default class DeezerApi {
    constructor() {
        this.endpoint = process.env.REACT_APP_PROXY_CORS + process.env.REACT_APP_API_ENDPOINT;
        this.client = null;
    }

    init = () => {
        let headers = {
            Accept: 'application/json',
        }

        this.client = axios.create({
            baseURL: this.endpoint,
            timeout: 31000,
            headers: headers
        })

        return this.client
    }

    getChart = offset => {
        return this.init().get('/chart/0');
    }

    getAlbum = id => {
        return this.init().get('/album/'+id);
    }
}
