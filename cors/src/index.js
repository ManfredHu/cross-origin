import axios from 'axios'
import log from '../../util/log'

const url = 'http://localhost:3000/cors'

log('本页的orgin为：' + window.location.href)

// if request has header withCredentials:true, 
// Access-Control-Allow-Origin: * is not allowed in the background response
axios.get(url/*, {'withCredentials': true}*/)
    .then(function (response) {
        // handle success
        if(response.data.retCode === 0){
            log(`收到来自${url}的返回数据`)
            log(JSON.stringify(response.data))
        }
    })
    .catch(function (error) {
        // handle error
        log('请求失败')
        console.log(error);
    })

