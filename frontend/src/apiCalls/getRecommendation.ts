import axios from "axios"

const getRecommendation = (user_id: number) => {
    return axios.get(`http://localhost:8000/api/recommendation/${user_id}`)
    .then((response) => {
        return response.data.data
    })
}

export default getRecommendation