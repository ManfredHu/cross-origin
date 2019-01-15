import log from '../../util/log'

log('本页的orgin为：' + window.location.href)
log('本页的document.domain为：' + document.domain)

// document.domain = 'localhost';

log('添加一个iframe如下（不显示可以添加display:none隐藏）')
const link = document.createElement('iframe')
link.style = 'display:none'
link.src = '/static/otherPage.html'
link.onload = () => {
    const ifr = document.getElementsByTagName('iframe')[0]
    const ifrWin = ifr && ifr.contentWindow && ifr.contentWindow
    log(`获取到页面${link.src}的内容: `)
    log(`${ifrWin.name}`)
}

document.body.appendChild(link)


