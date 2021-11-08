import axios from "axios";

const get = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(
            response => {
                console.log('成功')
                resolve(response.data)
            },
            err => {
                console.log('失败', err)
                reject(err)
            },
        )
    })
}

export { get }