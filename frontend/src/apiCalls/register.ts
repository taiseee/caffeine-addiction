import axios from "axios";

interface UserData {
    name: string,
    password: string,
    sex: number,
    personality: string,
    hobby: string,
    self_introduction: string,
    line_url: string,
}

const register = (user: UserData) => {
    return axios.post('http://localhost:8000/api/register', {
        name: user.name,
        password: user.password,
        sex: user.sex,
        personality: user.personality,
        hobby: user.hobby,
        self_introduction: user.self_introduction,
        line_url: user.line_url
    })
    .then((response) => {
        return response.data.data
    })
    .catch((error) => {
        window.alert(`エラーが発生しました: ${error}`)
    })
}

export default register;
