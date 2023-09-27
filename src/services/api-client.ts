import axios from "axios";

export default axios.create ( {
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2f7e1a2452fd4b6a84ff46ef556643ab'
    }
})