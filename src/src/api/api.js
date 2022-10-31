import * as axios from "axios"

export const convertValute = (from, to, amount) => {

    const options = {
        method: 'GET',
        url: 'https://currency-converter-pro1.p.rapidapi.com/convert',
        params: {from, to, amount},
        headers: {
          'X-RapidAPI-Key': '52e80a631amsh26dc9fa01d0b41fp18a9aajsn9cc198b73eee',
          'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
        }
    };
      
    return axios.request(options).then(response => {
        return response.data
    }).catch((error) => {
        console.log(error)
    })
}