import axios from "axios";

interface LikeData {
    send_user_id: number,
    receive_user_id: number
}

// LIKEしたら，LIKEした人のIDとLIKEされた人のIDを送って，マッチしたかどうか返す
const sendLike = (like: LikeData) => {
    return axios.post('http://localhost:8000/api/like', {
        send_user_id: like.send_user_id,
        receive_user_id: like.receive_user_id
    })
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        window.alert(`エラーが発生しました: ${error}`)
    })
}

export default sendLike;