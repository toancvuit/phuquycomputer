 import axios from 'axios';
 import * as server from '../config'
 const increment = ()=> {
//     fetch("https://fptshop.com.vn/apiFPTShop/Product/GetProductList?brandAscii=hp&url=https:%2F%2Ffptshop.com.vn%2Fmay-tinh-xach-tay%2Fhp%3Fsort%3Dban-chay-nhat&s=d803d2fbb5df5ed05bd8ae67d9c4f98adfe68dcecc8874a2990d4ed36f85f424", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "vi,en;q=0.9",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     'Access-Control-Allow-Origin' : '*',
//   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     // 'Access-Control-Allow-Origin': '*'
//   },
//   "referrer": "https://fptshop.com.vn/may-tinh-xach-tay/hp?sort=ban-chay-nhat",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// }) .then(res=> console.log(res.json()))
// .catch(err=>console.log(err))
axios.get(server.SERVER_URL+'/temp')
.then(res => res.data)
.then(res=> console.log(res));
    // var config = {
    //     headers: {'Access-Control-Allow-Origin': '*'}
    // };
    // axios.get('http://127.0.0.1:4001/temp',config)
    //   .then(function (response) {
    //     console.log("success"+response.data);
    //   })
    //   .catch(function (error) {
    //     console.log("err"+error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });  
    console.log('action increment');
    return {
        type: "INCREMENT"
    }
}
const openHpModel = () => {
    return {
        type: "OPENHPMODEL"
    }
}
const getHpList = () => {
    return {
        type: ''
    }
}
export {increment, openHpModel};