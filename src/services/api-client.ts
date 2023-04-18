import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b2a517edb5de437eb9e6af8381fa5165'
    }
})