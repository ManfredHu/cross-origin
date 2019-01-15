import log from '../../util/log'

log('本页的orgin为：' + window.location.href)
log('添加一个iframe如下（不显示可以添加display:none隐藏）')

const link = document.createElement('iframe')
// link.style = 'display:none'
link.src = 'http://localhost:9001/postMessage/static/otherPage.html'
link.width = '100%'
link.height = '300px'
link.onload = () => {
    const otherOrigin = 'http://localhost:9001'
    const ifr = document.getElementsByTagName('iframe')[0]
    const data = JSON.stringify({
        name: 'ManfredHu',
        type: 'postMessage',
        date: new Date().toLocaleDateString()
    })
    ifr.contentWindow.postMessage(data, otherOrigin);
    
    window.onmessage = function (e) {
        log(`收到otherPage的postMessage返回的消息`)
        if(e.origin === otherOrigin){
            log(JSON.stringify(e.data))
        }
        
    }
}

document.body.appendChild(link)


