import log from '../../util/log'

log('本页的orgin为：' + window.location.href)

const jsonpScript = document.createElement('script')
jsonpScript.src = 'http://localhost:3000/jsonp?callback=jsonpCallback'
document.body.appendChild(jsonpScript)

window.jsonpCallback = (data) => {
    log(`收到来自${jsonpScript.src}的返回数据`)
    log(JSON.stringify(data))
    console.log('JSONP callback function execute')
    console.log('receive data from server: ', data)
}