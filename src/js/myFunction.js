import axios from "axios";

const funcs = {
    getValue() {
        return new Promise((resolve, reject) =>{
            axios.get("http://api.mathjs.org/v4/", {
                }).then(function (response) {
                resolve(response);
                    // console.log(response)
                })
            .catch(function (error) {
                reject(error)
            });
        })
    },
    async addValue(param) {
        
        const data = await fetch(`http://api.mathjs.org/v4/?expr=${param}`)
        // console.log('data :>> ', data.json());
        return data.json()
    },
    
}
export default funcs

// export default async function getResult(param) {
//     const data = await fetch(`http://api.mathjs.org/v4/?expr=${param}`)
//         return data.json()
// }