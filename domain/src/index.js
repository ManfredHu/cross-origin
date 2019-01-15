import log from '../../util/log'

log('本页的orgin为：' + window.location.href)
log('本页的document.domain为：' + document.domain)

document.domain = 'localhost';

log('添加一个iframe如下（不显示可以添加display:none隐藏）')
const link = document.createElement('iframe')
// link.style = 'display:none'
link.src = '/static/otherPage.html'
link.onload = () => {
    const ifr = document.getElementsByTagName('iframe')[0]
    const ifrDoc = ifr && ifr.contentWindow && ifr.contentWindow.document
    const h1Title = ifrDoc.getElementById('title').innerHTML
    log(`获取到页面${link.src}的内容:${h1Title}`)
}

document.body.appendChild(link)


